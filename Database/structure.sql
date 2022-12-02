--@Author Stoil Iliev
-- Creates a SQL Database with user IDs (that automatically increase for new users), Email, password and login streak columns
#structure.sql11

CREATE TABLE newuser(
    UserID int (12) AUTO_INCREMENT,
    UserEmail VARCHAR (100) UNIQUE NOT NULL,
    UserPw VARCHAR (100) NOT NULL,
    UserStreak DATE NOT NULL,
CONSTRAINT PK_USER PRIMARY KEY (UserID));