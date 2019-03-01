using System;

public static class Kata
{
  public static int SumTree(Node root)
  {

    if(root.Left==null && root.Right==null) return root.Value;
    if(root.Left!=null && root.Right==null) return root.Value+SumTree(root.Left);
    if(root.Left!=null && root.Right!=null) return root.Value+SumTree(root.Left)+SumTree(root.Right);
    if(root.Left==null && root.Right!=null) return root.Value+SumTree(root.Right);
  return 0;}
}
