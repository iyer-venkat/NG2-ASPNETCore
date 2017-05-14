using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Net.Http;
using System.Runtime.Serialization;

namespace RBA_NG2.Controllers
{
    public class RBAController : Controller
    {


        [HttpPost("api/verifyLogin")]
        [Produces("application/json")]
        //[Consumes("application/json")]
        public IActionResult VerifyLogin([FromBody]LoginReq loginReq)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else
            {
                if (loginReq.UserId.ToLowerInvariant() != "venkat")
                {
                    return NotFound(new Error { Message = "User not found." });
                }
            }

            return Ok("success");
        }

        [HttpPost("api/getUserAccounts")]
        [Produces("application/json")]
        public IActionResult GetUserAccounts([FromBody]UserAccountReq userAccountReq)
        {
            return Json(new List<Accounts> {
                new Accounts{ AccountNbr="0123456789-1",AccountName="Account-1", AccountBal="10000", AvailableBal="8500" },
                new Accounts{ AccountNbr="0123456789-2",AccountName="Account-2", AccountBal="1000", AvailableBal="500" },
                new Accounts{ AccountNbr="0123456789-3",AccountName="Account-3", AccountBal="2000", AvailableBal="700" },
                new Accounts{ AccountNbr="0123456789-4",AccountName="Account-4", AccountBal="4000", AvailableBal="4000" }
            });
        }
    }

    [DataContract]
    public class Error
    {
        public string Message { get; set; }
    }

    [DataContract]
    public class LoginReq
    {
        [Required(ErrorMessage = "User ID is invalid. Please enter a valid User ID.")]
        [Newtonsoft.Json.JsonProperty("userId")]
        public string UserId { get; set; }

        [Required(ErrorMessage = "Password is invalid. Please enter a valid Password.")]
        [MinLength(8, ErrorMessage = "Password must at least be 8 characters.")]
        [Newtonsoft.Json.JsonProperty("password")]
        public string Password { get; set; }

        //[Newtonsoft.Json.JsonProperty("isAdmin")]
        //public Boolean? IsAdmin { get; set; }
    }

    [DataContract]
    public class UserAccountReq
    {
        [Newtonsoft.Json.JsonProperty("userID")]
        public int UserID { get; set; }
    }

    [DataContract]
    public class Accounts
    {
        [Newtonsoft.Json.JsonProperty("accountNbr")]
        public string AccountNbr { get; set; }

        [Newtonsoft.Json.JsonProperty("accountName")]
        public string AccountName { get; set; }

        [Newtonsoft.Json.JsonProperty("availableBal")]
        public string AvailableBal { get; set; }

        [Newtonsoft.Json.JsonProperty("accountBal")]
        public string AccountBal { get; set; }
    }
}
