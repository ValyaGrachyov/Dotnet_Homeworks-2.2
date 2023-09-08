namespace JWTProject.Data
{
    public static class UserMocks
    {
        public static List<User> Users = new List<User>()
        {
            new User()
            {
                Name = "123",
                Password= "123",
                Role = "admin"
            },
            new User()
            {
                Name = "456",
                Password= "456",
                Role = "simple"
            },
        };

        
    }
}
