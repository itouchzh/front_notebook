import{_ as i,r as n,o as d,c as s,b as e,d as a,a as t,e as l}from"./app-38101b12.js";const c={},o=e("h1",{id:"terramoursvue-v0-1-deployment",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#terramoursvue-v0-1-deployment","aria-hidden":"true"},"#"),a(" TerraMoursVue-V0.1 Deployment")],-1),u=e("h2",{id:"_1-create-the-server-project-folder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-create-the-server-project-folder","aria-hidden":"true"},"#"),a(" 1.Create the Server Project Folder")],-1),v={href:"http://43.134.164.127:8089/",target:"_blank",rel:"noopener noreferrer"},h=l(`<p>Create a project folder to manage the backend interface code:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/data/terramours/client/terramoursvue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Assign permissions to the folder:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cd /data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chmod -R 777 terramours
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-build-the-project" tabindex="-1"><a class="header-anchor" href="#_2-build-the-project" aria-hidden="true">#</a> 2.Build the Project</h2><p>Run the build command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pnpm build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://www.raokun.top/upload/2023/05/image-20230524155502411.png" alt="image-20230524155502411"></p><p>The built files are located in the dist folder.</p><h2 id="_3-package-and-compress-the-code" tabindex="-1"><a class="header-anchor" href="#_3-package-and-compress-the-code" aria-hidden="true">#</a> 3.Package and Compress the Code</h2><p>After successful publication, click &quot;Open Folder,&quot; select the parent directory, package the entire publish folder, and compress it into a zip file for uploading to the server.</p><p>Zip format:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dist{“date time”}.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-upload-to-the-server" tabindex="-1"><a class="header-anchor" href="#_4-upload-to-the-server" aria-hidden="true">#</a> 4.Upload to the Server</h2><p>The project path is:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/data/terramours/client/terramoursvue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Upload the compressed file to the designated folder on the server. XFTP is recommended for visual operation.</p><p><img src="https://www.raokun.top/upload/2023/05/image-20230524155722403.png" alt="image-20230524155722403"></p><h2 id="_5-unzip-the-files" tabindex="-1"><a class="header-anchor" href="#_5-unzip-the-files" aria-hidden="true">#</a> 5.Unzip the Files</h2><p>Run the unzip command in the project folder:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cd /data/terramours/client/terramoursvue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>unzip dist.zip --改成压缩包名称，如果是替换，输入A，全部覆盖
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-create-a-dockerfile" tabindex="-1"><a class="header-anchor" href="#_6-create-a-dockerfile" aria-hidden="true">#</a> 6.Create a Dockerfile</h2><p>Create a Dockerfile in the folder with this content:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM nginx
  
MAINTAINER ps
 
RUN rm /etc/nginx/conf.d/default.conf  
 
ADD default.conf /etc/nginx/conf.d/ 
 
COPY dist/ /usr/share/nginx/html/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-create-default-conf" tabindex="-1"><a class="header-anchor" href="#_7-create-default-conf" aria-hidden="true">#</a> 7.Create default.conf</h2><p>Create default.conf for configuring Nginx inside the container:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen       8081;# 配置端口
    server_name  http://43.134.164.127/; # 修改为docker服务宿主机的ip
 
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html =404;
    }
 
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-create-a-new-script-file-terramoursvue-sh" tabindex="-1"><a class="header-anchor" href="#_8-create-a-new-script-file-terramoursvue-sh" aria-hidden="true">#</a> 8.Create a New Script File: terramoursvue.sh</h2><p>Create a new script file for easy command execution:</p><p>Filename: terramoursvue.sh</p><p>Content:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

echo &quot;Stopping terramoursvue container...&quot;
docker stop terramoursvue
echo &quot;Removing terramoursvue container...&quot;
docker rm terramoursvue
echo &quot;Removing terramoursvue image...&quot;
docker rmi terramoursvue
echo &quot;Building terramoursvue image...&quot;
docker build -t terramoursvue .
echo &quot;Running terramoursvue container...&quot;
docker run --name terramoursvue -p 8089:8081 -d terramoursvue

exit 0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h2 id="_9-run-the-script-terramours-sh" tabindex="-1"><a class="header-anchor" href="#_9-run-the-script-terramours-sh" aria-hidden="true">#</a> 9. Run the Script: terramours.sh</h2><p>Execute the script:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sh terramoursvue.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The frontend project has been deployed to Docker, and the project port is 8089.</p><h2 id="_10-view-portainer-s-container-management" tabindex="-1"><a class="header-anchor" href="#_10-view-portainer-s-container-management" aria-hidden="true">#</a> 10. View Portainer&#39;s Container Management:</h2><p>Check the containers, and the deployment is successful:</p><p><img src="https://www.raokun.top/upload/2023/05/image-20230524160641351.png" alt="image-20230524160641351"></p>`,42);function m(p,b){const r=n("ExternalLinkIcon");return d(),s("div",null,[o,u,e("p",null,[a("Demo site:"),e("a",v,[a("http://43.134.164.127:8089/"),t(r)])]),h])}const f=i(c,[["render",m],["__file","getting-started-vue.html.vue"]]);export{f as default};
