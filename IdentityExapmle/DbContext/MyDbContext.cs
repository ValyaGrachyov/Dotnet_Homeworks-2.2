using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace IdentityExapmle.DbContext
{
    public class MyDbContext :IdentityDbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) { }

    }
}
