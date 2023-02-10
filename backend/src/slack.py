def postMessage(channel_id, message, client_id):
    # クライアント作成
    client = WebClient(client_id)

    # チャンネルにメッセージを投稿
    respose = client.chat_postMessage(channel=channel_id, text=message)