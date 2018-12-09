var expect = require("expect.js");
var empty = () => {
  // 空のリスト
  return (pattern) => {
    return pattern.empty();
  };
};

var cons = (value, list) => {
  return (pattern) => {
    return pattern.cons(value, list);
  };
};

var match = (data, pattern) => {
  return data(pattern);
};

var isEmpty = (alist) => {
  return match(alist, {
    empty: (_) => {
      return true;
    },
    cons: (head, tail) => {
      return false;
    }
  });
};

var head = (alist) => {
  return match(alist, {
    empty: (_) => {
      return null;
    },
    cons: (head, tail) => {
      return head;
    }
  });
};

var tail = (alist) => {
  return match(alist, {
    empty: (_) => {
      return null;
    },
    cons: (head, tail) => {
      return tail;
    }
  });
};

expect(isEmpty(empty())).to.eql(true);
expect(isEmpty(cons(1, empty()))).to.eql(false);
expect(head(cons(1, empty()))).to.eql(1);
expect(head(tail(cons(1, cons(2, empty()))))).to.eql(2);
expect(isEmpty(tail(cons(1, empty())))).to.be(true);
