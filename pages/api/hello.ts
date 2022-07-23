// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Catch, createHandler, Get, Req, Res } from "@storyofams/next-api-decorators";
import { exceptionHandler } from "../../middleware/exceptionHandler";

@Catch(exceptionHandler)
class Handler {
  @Get()
  async session(
      @Req() req: NextApiRequest,
      @Res() res: NextApiResponse,
  ) {
    return 'hello';
  }
}

export default createHandler(Handler)