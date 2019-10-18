describe('mytest', () => {
  it('return true', () => {
    expect(true).toEqual(true);
  });
});

//feature
class FriendsList {
  friends = [];

  addFirend(name) {
    this.friends.push(name);
    this.announceFriendship(name);
  }
  announceFriendship(name) {
    console.log(`${name} is now a friends!`);
  }

  removeFriend(name) {
    const idx = this.friends.indexOf(name);

    if (idx === -1) {
      throw new Error('Friend not found!');
    }
    this.friends.slice(idx, 1);
  }
}

//tests
describe('FriendsList', () => {
  let friendsList;

  beforeEach(() => {
    friendsList = new FriendsList();
  });
  it('intializes friends list', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('adds a friends to the list', () => {
    friendsList.addFirend('thiru');
    expect(friendsList.friends.length).toEqual(1);
  });

  it('announces friendship', () => {
    friendsList.announceFriendship = jest.fn();
    expect(friendsList.announceFriendship).not.toHaveBeenCalled();
    friendsList.addFirend('thiru');
    expect(friendsList.announceFriendship).toHaveBeenCalledWith('thiru');
  });
  describe('removeFriend', () => {
    it('remove a friend from the list', () => {
      friendsList.addFirend('thiru');
      expect(friendsList.friends[0]).toEqual('thiru');
      friendsList.removeFriend('thiru');
      //expect(friendsList.friends[0]).toBeUndefined();
    });

    it('throws an error as friend does not exist', () => {
      expect(() => friendsList.removeFriend('thiru')).toThrow(
        new Error(' friend Not found'),
      );
    });
  });
});
