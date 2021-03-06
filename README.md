# Erio

This is the repository to the Erio discord bot along with it's website.  If you want to add this bot to your server, use this link [here](https://discord.com/oauth2/authorize?client_id=699892206126760026&scope=bot&permissions=37088576).

# Requirements
- node.js
- PostgreSQL (optional)
- Knowledge of how to use React, Discord.js, and Express.

## Setup
 - run `npm install`
 - create a `.env` with the following contents:
     ```
     TOKEN=token
     PFX=prefix
     ADMINS=admin1,admin2,use_discord_ids
     BOTLOG=channel_id_for_botlog
     GITREPO=your_repo
     PORT=port_for_webserver
     PGUSER=postgres_username
     PGPASSWORD=postgres_user_password
     PGHOST=hostname_or_ip_of_db
     PGPORT=port_of_db
     PGDATABASE=database_name
     SSL_ENABLED=0 or 1
     ```
     For SSL to be enables, you will have to set the value to be 1, for false, just leave the variable out, or just put 0
- run `npm run start` and it will automatically build the rest for you (optionally you can run `npm run build` followed by `node -r dotenv/config www-dist/server/app.js`).
