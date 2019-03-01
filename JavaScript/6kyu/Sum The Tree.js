// return the sum of all values in the tree, including the root
function sumTheTreeValues(root){
  if(root.left==null && root.right==null) return root.value;
  if(root.left!=null && root.right==null) return root.value+sumTheTreeValues(root.left);
  if(root.left!=null && root.right!=null) return root.value+sumTheTreeValues(root.left)+sumTheTreeValues(root.right);
  if(root.left==null && root.right!=null) return root.value+sumTheTreeValues(root.right);

}
