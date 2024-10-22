import { respData, respErr } from "@/lib/request";

interface GetGameDetail {
    /** 语言 */
    locale: string
    /** 游戏的唯一标识 */
    gameId: string
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale');
    const gameId = searchParams.get('game-id');

    return respData(require(`../../../data/${locale}/${gameId}.json`));
  } catch (e: any) {
    console.log("get wallpapers failed: ", e);
    return respErr("get game detail failed" + e.message);
  }
}