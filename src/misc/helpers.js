export function getNameInitials(name) {
  const splitName = name.toUpperCase().split(' ');

  if (splitName.length > 1) {
    return splitName[0][0] + splitName[1][0];
  }

  return splitName[0][0];
}

export function transformToArray(snaVal) {
  return snaVal ? Object.keys(snaVal) : [];
}

export function transformToArrayWithId(snapVal) {
  return snapVal
    ? Object.keys(snapVal).map(roomId => {
        return { ...snapVal[roomId], id: roomId };
      })
    : [];
}

export async function getUserUpdates(userId, keyToUpdate, value, db) {
  const updates = {};

  updates[`/profile/${userId}/${keyToUpdate}`] = value;

  const getMsgs = db
    .ref('/messages')
    .orderByChild('author/uid')
    .equalTo(userId)
    .once('value');

  const getrooms = db
    .ref('/rooms')
    .orderByChild('/lastMessage/author/uid')
    .equalTo(userId)
    .once('value');

  const [messageSnap, roomSnap] = await Promise.all([getMsgs, getrooms]);

  messageSnap.forEach(msgSnap => {
    updates[`/messages/${msgSnap.key}/author/${keyToUpdate}`] = value;
  });

  roomSnap.forEach(rSnap => {
    updates[`/rooms/${rSnap.key}/lastMessage/author/${keyToUpdate}`] = value;
  });

  return updates;
}

export function groupByFun(array, groupingKeyFun) {
  return array.reduce((result, item) => {
    const groupingKey = groupingKeyFun(item);

    if (!result[groupingKey]) {
      result[groupingKey] = [];
    }

    result[groupingKey].push(item);

    return result;
  }, {});
}
