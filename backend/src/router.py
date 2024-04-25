from fastapi import  APIRouter

from src.init import crypto_helper

router = APIRouter(

    prefix='/cryptocurriencies'

)


@router.get('/')
async def get_cryptocurriencies():

    return await crypto_helper.get_listings()


@router.get('/{curremcy_id}')
async def get_cryptocurriencies(curremcy_id:int):

    return await crypto_helper.get_currency(curremcy_id)