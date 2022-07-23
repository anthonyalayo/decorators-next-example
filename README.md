### To reproduce the issue, please run `npm run build`

### Result

```
Failed to compile.

./pages/api/hello.ts:6:1
Syntax error: Support for the experimental syntax 'decorators' isn't currently enabled:

  4 | import { exceptionHandler } from "../../middleware/exceptionHandler";
  5 |
> 6 | @Catch(exceptionHandler)
    | ^
  7 | class Handler {
  8 |   @Get()
  9 |   async session(

Add @babel/plugin-proposal-decorators (https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-decorators) to the 'plugins' section of your Babel config to enable transformation.
If you want to leave it as-is, add @babel/plugin-syntax-decorators (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-decorators) to the 'plugins' section to enable parsing.


> Build failed because of webpack errors

```