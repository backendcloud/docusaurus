"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1477],{10:o=>{o.exports=JSON.parse('{"blogPosts":[{"id":"MiniGPT-4","metadata":{"permalink":"/blog/MiniGPT-4","editUrl":"https://github.com/backendcloud/backendcloud.github.io/tree/main/blog/2023-04-19-MiniGPT-4.md","source":"@site/blog/2023-04-19-MiniGPT-4.md","title":"\u4ecb\u7ecd\u4e24\u4e2a\u597d\u73a9\u7684AI\u5f00\u6e90\u9879\u76ee\uff1aMiniGPT-4\u548cAnimatedDrawings","description":"MiniGPT-4","date":"2023-04-19T00:00:00.000Z","formattedDate":"2023\u5e744\u670819\u65e5","tags":[{"label":"\u901a\u7528\u4eba\u5de5\u667a\u80fd","permalink":"/blog/tags/\u901a\u7528\u4eba\u5de5\u667a\u80fd"}],"readingTime":3.765,"hasTruncateMarker":false,"authors":[{"name":"backendcloud","title":"\u540e\u7aef\u4e91","url":"https://www.backendcloud.cn","imageURL":"https://avatars.githubusercontent.com/u/15382060?v=4","key":"backendcloud"}],"frontMatter":{"slug":"MiniGPT-4","title":"\u4ecb\u7ecd\u4e24\u4e2a\u597d\u73a9\u7684AI\u5f00\u6e90\u9879\u76ee\uff1aMiniGPT-4\u548cAnimatedDrawings","authors":["backendcloud"],"tags":["\u901a\u7528\u4eba\u5de5\u667a\u80fd"]},"nextItem":{"title":"\u53d1\u5e03\u4e00\u4e2a\u5f00\u6e90\u5c0f\u5de5\u5177 Hexo2DocusaurusBlog","permalink":"/blog/Hexo2DocusaurusBlog"}},"content":"## MiniGPT-4\\n\\nMiniGPT-4\u652f\u6301\u56fe\u7247\u8f93\u5165\uff0c\u5bf9\u56fe\u7247\u505a\u505a\u63cf\u8ff0\u3002MiniGPT-4\u662f\u4e00\u4e2a\u5177\u6709\u56fe\u50cf\u7406\u89e3\u80fd\u529b\u7684\u5f00\u6e90\u804a\u5929\u673a\u5668\u4eba\uff0c\u57fa\u4e8e+Vicuna-13B+LLM+\u548c+BLIP-2\u89c6\u89c9\u8bed\u8a00\u6a21\u578b\u3002\\n\\n\\n\u6700\u8fd1\u5f88\u706b\u7206\u7684ChatGPT\u4ee5\u53ca\u671f\u80cc\u540e\u7684GPT3.5 GPT4\uff0c\u5176\u4e2dGPT4\u867d\u8bf4\u652f\u6301\u591a\u6a21\u6001\uff0c\u4f46\u662f\u591a\u6a21\u6001\u81f3\u4eca\u65e5\uff082023\u5e7404\u670819\u65e5\uff09\u4e00\u76f4\u6ca1\u6709\u5f00\u653e\uff0c\u5c0f\u89c4\u6a21\u516c\u6d4b\u90fd\u6ca1\u5f00\u653e\u3002\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u5148\u7528MiniGPT-4\u6765\u73a9\u73a9\u3002\\n\\n\u5b98\u7f51\u7ed9\u4e86\u706b\u70c8\u9e1f\u7684\u4f8b\u5b50\uff1a\\n\\n![](2023-04-19-MiniGPT-4/2023-04-19-17-32-03.png)\\n\\n\u8fd9\u4e2aLogo\u8bbe\u8ba1\u7b80\u5355\u800c\u4e0d\u5931\u65f6\u5c1a\u611f\uff0c\u4ee5\u7c89\u8272\u7ebf\u6761\u52fe\u52d2\u51fa\u4e00\u53ea\u5355\u811a\u7ad9\u5728\u6c34\u4e2d\u7684\u706b\u70c8\u9e1f\u5f62\u8c61\u3002\u6574\u4e2a\u8bbe\u8ba1\u5e72\u51c0\u7b80\u6d01\uff0c\u6613\u4e8e\u8fa8\u8bc6\uff0c\u9002\u7528\u4e8e\u591a\u79cd\u573a\u5408\uff0c\u6bd4\u5982\u7528\u4e8e\u6d77\u6ee8\u5ea6\u5047\u6751\u7684Logo\u6216\u8005\u662f\u706b\u70c8\u9e1f\u4e3b\u9898\u6d3b\u52a8\u7684\u6807\u5fd7\u3002\u4ee5\u706b\u70c8\u9e1f\u4f5c\u4e3a\u8c61\u5f81\uff0c\u589e\u52a0\u4e86\u4e00\u4efd\u8da3\u5473\u548c\u6d3b\u6cfc\u611f\uff0c\u8ba9\u6574\u4f53\u8bbe\u8ba1\u66f4\u52a0\u5bcc\u6709\u8bb0\u5fc6\u6027\u548c\u5438\u5f15\u529b\u3002\u603b\u7684\u6765\u8bf4\uff0c\u8fd9\u662f\u4e00\u4e2a\u8bbe\u8ba1\u826f\u597d\u7684Logo\uff0c\u80fd\u591f\u6709\u6548\u5730\u4f20\u8fbe\u54c1\u724c\u7684\u4fe1\u606f\u3002\\n\\n> \u7b14\u8005\u89c9\u5f97\u5927\u591a\u6570\u4eba\u7c7b\u4e5f\u505a\u4e0d\u5230\u8fd9\u79cd\u6c34\u51c6\u7684\u5bf9\u56fe\u7247\u7684\u63cf\u8ff0\u3002\\n\\n\u5f00\u6e90\u4ee3\u7801\u653e\u5728 https://github.com/Vision-CAIR/MiniGPT-4\\n\\n\u53ef\u4ee5\u53bb\u5b98\u7f51\u5728\u7ebf\u4f53\u9a8c MiniGPT-4\u7684\u5b98\u7f51 https://minigpt-4.github.io/\\n\\n> \u7b14\u8005\u4f53\u9a8c\u4e86\u4e0b\uff0c\u786e\u5b9e\u53ef\u4ee5\u8f93\u5165\u56fe\u7247\uff0c\u7136\u540e\u751f\u6210\u63cf\u8ff0\u3002\u4f46\u662f\uff0c\u73b0\u5728\u7528\u7684\u4eba\u592a\u591a\uff0c\u6392\u961f\u592a\u957f\u4e86\uff0c\u6bcf\u4e2a\u95ee\u9898\u90fd\u8981\u6392\u961f\u5f88\u957f\u65f6\u95f4\uff0c\u8981\u70b9\u8010\u5fc3\u3002\\n\\n## AnimatedDrawings\\n\\nAnimated Drawings \u662f\u4e00\u4e2a\u53ef\u4ee5\u5c06\u7ed8\u753b\u4f5c\u54c1\u8f6c\u6362\u6210\u52a8\u753b\u7684\u9879\u76ee\uff0c\u8fd9\u4e2a\u9879\u76ee\u65e8\u5728\u6210\u4e3a\u4e00\u4e2a\u6709\u7528\u7684\u521b\u9020\u6027\u5de5\u5177\uff0c\u5141\u8bb8\u4f60\u7075\u6d3b\u5730\u521b\u9020\u52a8\u753b\uff0c\u8ba9\u4f60\u81ea\u5df1\u753b\u7684\u4eba\u7269\u6210\u4e3a\u4e3b\u89d2\u3002\\n\\n\u5728\u7ebf\u4f53\u9a8c\u5b98\u7f51 https://sketch.metademolab.com/canvas\\n\\n\u5f00\u6e90\u4ee3\u7801\u653e\u5728  https://github.com/facebookresearch/AnimatedDrawings\\n\\n\u8fd9\u4e0d\u662f\u65b0\u51fa\u7684\u9879\u76ee\uff0c\u51e0\u5e74\u524d\u5c31\u5f00\u653e\u5728\u7ebf\u4f53\u9a8c\u4e86\u3002\u53ea\u662f\u6700\u8fd1\u5404\u79cd\u4eba\u5de5\u667a\u80fd\u9879\u76ee\u5f88\u706b\u4e14\u90fd\u6709\u5f00\u6e90\u8d8b\u52bf\uff0c\u8be5\u9879\u76ee\u6700\u8fd1\u624d\u5f00\u653e\u4e86\u6e90\u4ee3\u7801\u3002\\n\\n> \u7b14\u8005\u4f53\u9a8c\u4e86\u4e0b\uff0c\u786e\u5b9e\u53ef\u4ee5\u5c06\u7ed8\u753b\u4f5c\u54c1\u8f6c\u6362\u6210\u52a8\u753b\u3002\u5206\u522b\u7528\u4e86demo\u7684\u56fe\u7247\u548c\u81ea\u5df1\u753b\u4e86\u4e2a\u56fe\u7247\uff0c\u90fd\u53ef\u4ee5\uff0c\u4f46\u662f\u5728\u7ebf\u4f53\u9a8c\u7684\u53ea\u6709\u56fa\u5b9a\u7684\u51e0\u5957\u52a8\u4f5c\u3002\u5982\u679c\u60f3\u8981\u66f4\u591a\u7684\u52a8\u4f5c\uff0c\u4ee5\u53ca\u66f4\u591a\u7684\u573a\u666f\u80cc\u666f\uff0c\u53ef\u4ee5\u81ea\u5df1\u5b89\u88c5\u5728\u672c\u5730\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u968f\u610f\u521b\u4f5c\u4e86\u3002\u6709\u4e86AI\u7684\u5e2e\u52a9\uff0c\u5c06\u6765\u52a8\u753b\u521b\u4f5c\u5c31\u66f4\u52a0\u5bb9\u6613\u4e86\u3002\\n\\n## X Studio 3\\n\\n\u4ecb\u7ecd\u7684\u7b2c\u4e09\u4e2a\u9879\u76ee X Studio 3 \u867d\u4e0d\u662f\u5f00\u6e90\u7684\uff0c\u4f46\u662f\uff0c\u662f\u4e00\u6b3eAI\u8f85\u52a9\u6b4c\u66f2\u521b\u4f5c\u8f6f\u4ef6\u3002\u6700\u8fd1AI\u7ed8\u56fe\u5de5\u5177\u5f88\u706b\u5f88\u591a\uff0c\u6bd4\u5982 Dall-E 2\uff0cmidjourney\uff0cStable Diffusion\u7b49\u7b49\uff0c\u4f46\u662fAI\u97f3\u4e50\u5236\u4f5c\u5de5\u5177\u6bd4\u8f83\u5c11\u89c1\uff0c\u6240\u4ee5\u7279\u522b\u4ecb\u7ecd\u4e00\u4e0b\uff0c\u6709\u97f3\u4e50\u57fa\u7840\u7684\u8bfb\u8005\u53ef\u4ee5\u73a9\u4e00\u73a9\u3002\\n\\nX Studio 3 \u662f\u4e00\u6b3e\u56fd\u4ea7\u7684\u662f\u4e00\u6b3e\u4e13\u4e1a\u7684\u865a\u62df\u6b4c\u624b\u8f6f\u4ef6\uff0c\u8fd9\u6b3e\u8f6f\u4ef6\u80fd\u591f\u5e2e\u52a9\u7528\u6237\u8f7b\u677e\u8fdb\u884c\u5404\u79cd\u6b4c\u66f2\u7684\u521b\u4f5c\uff0c\u80fd\u591f\u63d0\u5347\u5927\u5bb6\u7684\u97f3\u4e50\u5236\u4f5c\u4f53\u9a8c\uff0c\u964d\u4f4e\u97f3\u4e50\u521b\u4f5c\u7684\u95e8\u69db\u3002\\n\\n\u5b98\u65b9\u4e0b\u8f7d\u5730\u5740 https://singer.xiaoice.com/"},{"id":"Hexo2DocusaurusBlog","metadata":{"permalink":"/blog/Hexo2DocusaurusBlog","editUrl":"https://github.com/backendcloud/backendcloud.github.io/tree/main/blog/2023-04-18-Hexo2DocusaurusBlog.md","source":"@site/blog/2023-04-18-Hexo2DocusaurusBlog.md","title":"\u53d1\u5e03\u4e00\u4e2a\u5f00\u6e90\u5c0f\u5de5\u5177 Hexo2DocusaurusBlog","description":"\u6e90\u7801\u653e\u5728\uff1a https://github.com/backendcloud/Hexo2DocusaurusBlog","date":"2023-04-18T00:00:00.000Z","formattedDate":"2023\u5e744\u670818\u65e5","tags":[{"label":"\u540e\u7aef\u4e91\u53d1\u5e03\u7684\u5f00\u6e90\u5c0f\u9879\u76ee","permalink":"/blog/tags/\u540e\u7aef\u4e91\u53d1\u5e03\u7684\u5f00\u6e90\u5c0f\u9879\u76ee"}],"readingTime":2.1,"hasTruncateMarker":false,"authors":[{"name":"backendcloud","title":"\u540e\u7aef\u4e91","url":"https://www.backendcloud.cn","imageURL":"https://avatars.githubusercontent.com/u/15382060?v=4","key":"backendcloud"}],"frontMatter":{"slug":"Hexo2DocusaurusBlog","title":"\u53d1\u5e03\u4e00\u4e2a\u5f00\u6e90\u5c0f\u5de5\u5177 Hexo2DocusaurusBlog","authors":["backendcloud"],"tags":["\u540e\u7aef\u4e91\u53d1\u5e03\u7684\u5f00\u6e90\u5c0f\u9879\u76ee"]},"prevItem":{"title":"\u4ecb\u7ecd\u4e24\u4e2a\u597d\u73a9\u7684AI\u5f00\u6e90\u9879\u76ee\uff1aMiniGPT-4\u548cAnimatedDrawings","permalink":"/blog/MiniGPT-4"},"nextItem":{"title":"\u7f51\u7ad9\u51c6\u5907\u4eceHexo\u8fc1\u79fb\u5230Docusaurus","permalink":"/blog/Hexo2Docusaurus"}},"content":"> \u6e90\u7801\u653e\u5728\uff1a https://github.com/backendcloud/Hexo2DocusaurusBlog\\n\\n> \u53d1\u5e03\u7684\u53ef\u6267\u884c\u6587\u4ef6\u653e\u5728\uff1a https://github.com/backendcloud/Hexo2DocusaurusBlog/releases\\n\\n## \u9700\u6c42\u80cc\u666f\\n\\n\u7f51\u7ad9\u51c6\u5907\u4eceHexo\u8fc1\u79fb\u5230Docusaurus\u4e86\u3002\u4f46\u662f\u539f\u6765Hexo\u7684\u535a\u5ba2\u4e0d\u80fd\u76f4\u63a5\u8fc1\u79fb\u5230Docusaurus\uff0c\u9700\u8981\u505a\u4e00\u4e9b\u8f6c\u6362\u3002\u8fd9\u7c7b\u535a\u6587\u6709286\u7bc7\uff0c\u82e5\u91cf\u4e0d\u591a\u53ef\u4ee5\u624b\u5de5\u5904\u7406\u4e0b\uff0c\u4f46\u662f\u91cf\u5927\u7684\u8bdd\uff0c\u5c31\u9700\u8981\u5199\u4e2a\u5de5\u5177\u6765\u5904\u7406\u4e86\u3002\\n\\n\u672c\u7740\u4e0d\u91cd\u590d\u9020\u8f6e\u5b50\u7684\u539f\u5219\uff0c\u5148\u53bbGithub\u4e0a\u641c\u4e86\u4e0b\uff0c\u76f8\u5173\u7684\u9879\u76ee\u53ea\u67092\u4e2a\uff0c\u4e00\u4e2agolang\u5199\u7684\u5de5\u5177\uff0c\u4e00\u4e2aruby\u5199\u7684\u5de5\u5177\uff0cstar\u6570\u90fd\u4e3a0\u3002\u770b\u4e86\u4e0b\u4ee3\u7801\uff0c\u53d1\u73b0\u65e0\u6cd5\u4f7f\u7528\uff0c\u65e0\u6cd5\u4f7f\u7528\u7684\u539f\u56e0\u662f\u4f5c\u8005\u662f\u6839\u636e\u81ea\u5df1\u535a\u5ba2\u4ee3\u7801\u9879\u76ee\u7684\u7ed3\u6784\u5199\u7684\u8f6c\u6362\u5de5\u5177\uff0c\u548c\u6211\u7684\u4e0d\u4e00\u6837\uff0c\u6bd4\u5982\u5176\u4e2d\u4e00\u4e2a\u4f5c\u8005\u662f\u5c06\u81ea\u5df1\u7684Obsidian\u7b14\u8bb0\u7528\u5728\u4e86hexo\u4e0a\uff0c\u540e\u6765\u518d\u6b21\u8f6c\u6362\u4e3aDocusaurus\u535a\u5ba2\u3002\u683c\u5f0f\uff0c\u76ee\u5f55\u7ed3\u6784\u5dee\u5f02\u8f83\u5927\uff0c\u6ca1\u6cd5\u76f4\u63a5\u7528\u3002\u6211\u7684\u662f\u6309\u7167\u5b98\u65b9\u6587\u6863\u63a8\u8350\u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u6587\u4ef6\u547d\u540d\u65b9\u5f0f\uff0c\u5185\u5bb9\u7ed3\u6784\u3002\u522b\u4eba\u73b0\u6210\u7684\u5de5\u5177\u65e0\u6cd5\u76f4\u63a5\u62ff\u6765\u7528\u3002\u4e8e\u662f\u91cd\u65b0\u5f00\u53d1\u4e86\u4e2a\u5de5\u5177\u3002\\n\\n\\n## \u7b80\u4ecb\\n\\n\u6b64\u5de5\u5177\u7528\u4e8e\u5c06 Hexo \u535a\u5ba2\u8f6c\u6362\u4e3a Docusaurus \u535a\u5ba2\u3002\\n\\n## \u7528\u6cd5\\n\\n```bash\\nHexo2DocusaurusBlog.exe -h\\n  -author string\\n        blog author name\\n  -docusaurus string\\n        docusaurus blog directory\\n  -dry-run\\n        perform a trial run with no changes made\\n  -hexo string\\n        hexo blog directory\\n```\\n\\n## \u4f8b\u5b50\\n\\n\\nHexo \u535a\u5ba2\u7684markdown\u6587\u4ef6\u4f4d\u4e8e: input/hexo-blog-for-test.md:\\n\\n```bash\\nHexo2DocusaurusBlog.exe -hexo ./input -docusaurus ./output -author backendcloud -dry-run\\nINFO: Convert Hexo Blog [hexo-blog-for-test] to Docusaurus Blogs Success!\\nINFO: [DRY-RUN] Write Docusaurus Blog [hexo-blog-for-test] Success!\\n```\\n\\n> -dry-run : perform a trial run with no changes made\\n\\n\\n\\n```bash\\nHexo2DocusaurusBlog.exe -hexo ./input -docusaurus ./output -author backendcloud\\nINFO: Convert Hexo Blog [hexo-blog-for-test] to Docusaurus Blogs Success!\\nINFO: Write Docusaurus Blog [hexo-blog-for-test] Success!\\n```\\n\\n\u6267\u884c\u5de5\u5177\uff0c\u8f6c\u6362\u540e\u7684 Docusaurus \u535a\u5ba2\u7684markdown\u6587\u4ef6\u4f4d\u4e8e: output/2023-04-17-hexo-blog-for-test.md"},{"id":"Hexo2Docusaurus","metadata":{"permalink":"/blog/Hexo2Docusaurus","editUrl":"https://github.com/backendcloud/backendcloud.github.io/tree/main/blog/2023-04-17-Hexo2Docusaurus.md","source":"@site/blog/2023-04-17-Hexo2Docusaurus.md","title":"\u7f51\u7ad9\u51c6\u5907\u4eceHexo\u8fc1\u79fb\u5230Docusaurus","description":"\u7f51\u7ad9\u51c6\u5907\u4eceHexo\u8fc1\u79fb\u5230Docusaurus\u4e86\u3002\u539f\u56e0\u5982\u4e0b\uff1a","date":"2023-04-17T00:00:00.000Z","formattedDate":"2023\u5e744\u670817\u65e5","tags":[{"label":"Hexo","permalink":"/blog/tags/hexo"},{"label":"Docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.815,"hasTruncateMarker":false,"authors":[{"name":"backendcloud","title":"\u540e\u7aef\u4e91","url":"https://www.backendcloud.cn","imageURL":"https://avatars.githubusercontent.com/u/15382060?v=4","key":"backendcloud"}],"frontMatter":{"slug":"Hexo2Docusaurus","title":"\u7f51\u7ad9\u51c6\u5907\u4eceHexo\u8fc1\u79fb\u5230Docusaurus","authors":["backendcloud"],"tags":["Hexo","Docusaurus"]},"prevItem":{"title":"\u53d1\u5e03\u4e00\u4e2a\u5f00\u6e90\u5c0f\u5de5\u5177 Hexo2DocusaurusBlog","permalink":"/blog/Hexo2DocusaurusBlog"}},"content":"\u7f51\u7ad9\u51c6\u5907\u4eceHexo\u8fc1\u79fb\u5230Docusaurus\u4e86\u3002\u539f\u56e0\u5982\u4e0b\uff1a\\n* Docusaurus\u5728\u5efa\u7ad9\u9886\u57df\u6709\u7740\u5f88\u597d\u7684\u53e3\u7891\u548c\u70ed\u5ea6\uff0c\u800c\u4e14\u5b83\u7684\u6587\u6863\u4e5f\u5f88\u597d\uff0c\u878d\u5408markdown\u548creact\uff0cjs\uff0cts\u7b49\u8bed\u8a00\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u8fdb\u884c\u4e8c\u6b21\u5f00\u53d1\u3002\\n* Docusaurus\u793e\u533a\u6bd4\u8f83\u6d3b\u8dc3\u3002\\n* Docusaurus\u6bd4Hexo\u66f4\u9002\u5408\u505a\u6280\u672f\u6587\u6863\u7c7b\u7f51\u7ad9\u3002\u56e0\u4e3aDocusaurus\u6709\u7ed3\u6784\u5316\u77e5\u8bc6\u5e93\u7684\u529f\u80fd\uff0c\u800cHexo\u6ca1\u6709\u3002\u4e14Docusaurus\u5e26\u6709blog\u7684\u529f\u80fd\u3002\\n* Docusaurus\u76f8\u6bd4Hexo\u66f4\u50cf\u4e00\u4e2a\u7f51\u7ad9\uff0c\u4fbf\u4e8e\u8425\u9500\u3002\\n* Docusaurus\u5bf9Github Actions\u7684\u652f\u6301\u66f4\u597d\uff0c\u53ef\u4ee5\u81ea\u52a8\u5316\u90e8\u7f72\u3002Docusaurus\u5bf9Github Pages\u7684\u652f\u6301\u4e5f\u66f4\u597d\uff0c\u53ef\u4ee5\u81ea\u52a8\u5316\u90e8\u7f72\u5230Github Pages\u3002\\n* Docusaurus\u652f\u6301\u591a\u8bed\u79cd\u3002"}]}')}}]);