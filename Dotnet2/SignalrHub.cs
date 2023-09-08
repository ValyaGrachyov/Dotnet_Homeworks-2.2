using System.Threading.Tasks;
using SignalR;
using Microsoft.AspNetCore.SignalR;

namespace SignalR
{
    public class SignalrHub : Hub
    {
        public async Task NewMessage(MessageDto message)
        {
            await Clients.All.SendAsync("ReceiveMessage", message);
        }
    }

    public class MessageDto
    {
        public string Name { get; set; }
        public string Message { get; set; }
    }
}
