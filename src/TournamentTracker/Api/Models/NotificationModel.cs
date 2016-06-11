using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TournamentTracker.Api.Models
{
    public class NotificationModel
    {
        public string SendingPlayerId {get; set;}
        public string ReceivingPlayerId {get; set;}
        public string SendingPlayerName {get; set;}
        public string ReceivingPlayerName {get; set;}
        public string Message {get; set;}
    }
}