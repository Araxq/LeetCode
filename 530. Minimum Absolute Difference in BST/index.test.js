const { TreeNode, getMinimumDifference } = require('./index');

it('getMinimumDifference', () => {
  // [0,null,2236,1277,2776,519]
  const root = new TreeNode(
    0,
    null,
    new TreeNode(
      2236,
      new TreeNode(1277, new TreeNode(519)),
      new TreeNode(2776),
    ),
  );

  expect(getMinimumDifference(root)).toStrictEqual(519);
});
