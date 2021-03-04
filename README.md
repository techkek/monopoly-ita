# monopoly-ita
this is an Italian translation of [lamarios/monopoly](https://github.com/lamarios/monopoly)
# docker-compose
## Environment variables:


| Name | Description | Default | Required |
| ---- | -------| ---- | ---- |
| PORT | Which port to run the application on | 8443 | No |
| HTTP_TLS_KEY | Path of the SSL  key | 'key.pem' | No (but recommended) |
| HTTP_TLS_CERTIFICATE | Path of the SSL Certificate | 'cert.pem' | No (but recommended) |
| HTTP | Set to 'true' to disable https. To use if you want to run the game behind a HTTPS reverse proxy for example | 'false' | No |

## Commands:
```
docker-compose up -d 
docker-compose up -d --build #this also updates the build if you have changed any files in the directory
```

# what I haven't translated yet
I have to finish translating the logs and I can't translate "community" 'cause it breaks everything, I'll fix it when I have time :)

# thanks
thanks to [lamarios](https://github.com/lamarios) for making this amazing game!
