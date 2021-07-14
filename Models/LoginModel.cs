using System.ComponentModel.DataAnnotations;

namespace Tm2TestAppService.Models
{
    public class LoginModel
    {
        /// <summary>
        /// ID
        /// </summary>
        [Display(Name = "ID")]
        public string ID { get; set; }

        /// <summary>
        /// 氏名
        /// </summary>
        [Display(Name = "氏名")]
        public string Name { get; set; }

        /// <summary>
        /// 年齢
        /// </summary>
        [Display(Name = "年齢")]
        public string Age { get; set; }
    }

    public class LoginResult
    {
        public int ID;
        public string Name;
        public int Age;
        public string Result;

    }
}