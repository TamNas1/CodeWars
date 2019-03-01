public class Kata
{
  public static string High(string s)
  {
    string[] words = s.Split(' ');
    string best = words[0];
    int _best = CheckWord(words[0]);
    for(int i=0;i<words.Length;i++)
    {
      if(CheckWord(words[i])>_best)
      {
        best=words[i];
        _best=CheckWord(words[i]);
      }
    }
    return best;

  }
 static int CheckWord(string word)
  {
    char[] ABC = "abcdefghijklmnopqrstuvwxyz".ToCharArray();
    int sum=0;
    char[] word2 = word.ToCharArray();
    for(int i=0;i<word2.Length;i++)
    {
          for(int J=0;J<26;J++)
          {
              if(word2[i]==ABC[J])
                {
                   sum+=J+1;
                }
          }
    }
    return sum;
  }
}
