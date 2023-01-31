# lawitter

## Docker立ち上げ~開発まで

### 手順

1. `make up`
1. VSCodeのDockerメニューから開発したいサーバー（バックエンドなら**backend**）を右クリック
1. **Attach Visual Studio Code**をクリック
1. **フォルダーを開く**
1. `/src`を開く

### 注意事項

- `make`コマンドは、`docker compose`コマンドを楽に使えるようにしたもの
  - 詳しくは[`Makefile`](./Makefile)を参照
- 仮想環境の`src`と、ローカルPCの[`backend/src`](./backend/src/)は同期されている
- `pip install`などでパッケージを追加した場合は、閉じる前に`pip freeze > requirements.txt`を実行する
  - そうしないと次実行したときにまたインストールを手動でやる羽目になる