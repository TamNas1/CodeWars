using System;

public static class Kata
{
  public static string Solution(string str)
  {

string output = "";
for (int i = str.Length - 1; i >= 0; i--)
{
    output += str[i];
}
return output;
  }
}
