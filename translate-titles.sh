#!/bin/bash

# 博客文章标题翻译
echo "开始翻译博客文章标题..."
while IFS='|' read -r english chinese || [[ -n "$english" ]]; do
  if [[ $english == \#* ]] || [[ -z "$english" ]]; then
    continue  # 跳过注释行和空行
  fi
  
  # 在所有博客文章中查找包含该英文标题的文件
  find data/blog -name "*.mdx" -type f -exec grep -l "title: '$english'" {} \; | while read -r file; do
    echo "处理文件: $file"
    # 使用sed替换标题
    sed -i '' "s/title: '$english'/title: '$chinese'/" "$file"
  done
  
  # 处理带双引号的标题
  find data/blog -name "*.mdx" -type f -exec grep -l "title: \"$english\"" {} \; | while read -r file; do
    echo "处理文件: $file"
    # 使用sed替换标题
    sed -i '' "s/title: \"$english\"/title: \"$chinese\"/" "$file"
  done
done < <(grep -v '^#' title-translations.txt | head -n 26)  # 只处理博客部分

# 代码片段标题翻译
echo "开始翻译代码片段标题..."
while IFS='|' read -r english chinese || [[ -n "$english" ]]; do
  if [[ $english == \#* ]] || [[ -z "$english" ]]; then
    continue  # 跳过注释行和空行
  fi
  
  # 在所有代码片段中查找包含该英文标题的文件
  find data/snippets -name "*.mdx" -type f -exec grep -l "title: '$english'" {} \; | while read -r file; do
    echo "处理文件: $file"
    # 使用sed替换标题
    sed -i '' "s/title: '$english'/title: '$chinese'/" "$file"
  done
  
  # 处理带双引号的标题
  find data/snippets -name "*.mdx" -type f -exec grep -l "title: \"$english\"" {} \; | while read -r file; do
    echo "处理文件: $file"
    # 使用sed替换标题
    sed -i '' "s/title: \"$english\"/title: \"$chinese\"/" "$file"
  done
done < <(grep -v '^#' title-translations.txt | tail -n 24)  # 只处理代码片段部分

echo "标题翻译完成!" 