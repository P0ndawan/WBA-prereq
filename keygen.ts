import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58'

let kp = Keypair.generate()

console.log(`You've generated a new Solana wallet:${kp.publicKey.toBase58()}`)

function walletToBase58(wallet:any){
    return bs58.encode(wallet)
}

function base58ToWallet(wallet:any){
    return bs58.decode(wallet)
}

