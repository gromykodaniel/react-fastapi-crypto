from src.config import settings
from src.http_client import cryptoHTTPclient

crypto_helper = cryptoHTTPclient(

    base_url='https://pro-api.coinmarketcap.com/' ,
    api_key=settings.API_KEY

)