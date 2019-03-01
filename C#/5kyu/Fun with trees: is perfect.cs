namespace Tree {

  using System;

  public class TreeNode
  {
    public TreeNode left;
    public TreeNode right;
   public static int maxDepth(TreeNode node)
    {
        if (node == null)
            return 0;
        else
        {
            int lDepth = maxDepth(node.left);
            int rDepth = maxDepth(node.right);
            if (lDepth > rDepth)
                return (lDepth + 1);
             else
                return (rDepth + 1);
        }
    }
    public static bool IsBalanced(TreeNode root)
    {
      if(maxDepth(root.right)==maxDepth(root.left)) return true;
      return false;
    }
    public static bool IsPerfect(TreeNode root)
    {
            if(root==null) return true;
     return IsPerfect1(root) && IsBalanced(root);
    }
    public static bool IsPerfect1(TreeNode root)

  {

        if(root.left==null && root.right==null) return true;
        if(root.left!=null && root.right!=null) return (IsPerfect(root.left) && IsPerfect(root.right));
        if(root.right!=null && root.left==null) return false;
        if(root.left!=null && root.right==null) return false;
        return false;
    }

    public static TreeNode Leaf()
    {
        return new TreeNode();
    }

    public static TreeNode Join(TreeNode left, TreeNode right)
    {
        return new TreeNode().WithChildren(left, right);
    }

    public TreeNode WithLeft(TreeNode left)
    {
        this.left = left;
        return this;
    }

    public TreeNode WithRight(TreeNode right)
    {
        this.right = right;
        return this;
    }

    public TreeNode WithChildren(TreeNode left, TreeNode right)
    {
        this.left = left;
        this.right = right;
        return this;
    }

    public TreeNode WithLeftLeaf()
    {
        return WithLeft(Leaf());
    }

    public TreeNode WithRightLeaf()
    {
        return WithRight(Leaf());
    }

    public TreeNode WithLeaves()
    {
        return WithChildren(Leaf(), Leaf());
    }
  }
}
