public class Kata
{
  public static string CreatePhoneNumber(int[] numbers)
  {
    return "("+numbers[0].ToString()+numbers[1].ToString()+numbers[2].ToString()+") "+numbers[3].ToString()+numbers[4].ToString()+numbers[5].ToString()+"-"+numbers[6].ToString()+numbers[7].ToString()+numbers[8].ToString()+numbers[9].ToString();
  }
}
