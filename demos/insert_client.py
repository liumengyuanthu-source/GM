import re

f = open('/root/.openclaw/workspace/projects/Retail_Experience_Studio/Demo/experience-studio-v2.html', 'r')
content = f.read()
f.close()

f = open('/root/.openclaw/workspace/projects/Retail_Experience_Studio/Demo/client_data.js', 'r')
client_data = f.read()
f.close()

insert_point = content.find('let state=')
if insert_point == -1:
    print("ERROR: Could not find 'let state='")
    exit(1)

new_content = content[:insert_point] + client_data + '\n' + content[insert_point:]

script_end = new_content.rfind('\x3c/script>')
if script_end == -1:
    print("ERROR: Could not find </script>")
    exit(1)

functions = """
function openClientModal(key){
  const data = CLIENT_DATA.find(d => d.key === key);
  if(!data) return;
  const labels = CM_LABELS[state.lang] || CM_LABELS.en;
  const lang = state.lang;
  
  const renderList = (items) => {
    if(!items || !items.length) return '<li class="cm-empty">\u2014</li>';
    return items.map(i => '<li>' + i + '</li>').join('');
  };
  
  const title = data.title[lang] || data.title.en;
  const subtitle = data.subtitle[lang] || data.subtitle.en;
  const desc = data.desc[lang] || data.desc.en;
  const seeItems = data.see[lang] || data.see.en;
  const capItems = data.cap[lang] || data.cap.en;
  const sceneItems = data.scene[lang] || data.scene.en;
  const linkItems = data.link;
  
  const demoLabel = LB[lang] ? LB[lang].openDemo : 'Open live demo';
  
  let html = '<div class="cm-head">';
  html += '<button class="cm-x" onclick="closeClientModal()">\u2715</button>';
  html += '<div class="cm-kicker">' + title + '</div>';
  html += '<div class="cm-title">' + subtitle + '</div>';
  html += '<div class="cm-desc">' + desc + '</div>';
  html += '</div>';
  html += '<div class="cm-body">';
  html += '<div class="cm-grid">';
  html += '<div class="cm-card"><h5>' + labels.cm_see + '</h5><ul>' + renderList(seeItems) + '</ul></div>';
  html += '<div class="cm-card"><h5>' + labels.cm_cap + '</h5><ul>' + renderList(capItems) + '</ul></div>';
  html += '<div class="cm-card"><h5>' + labels.cm_scene + '</h5><ul>' + renderList(sceneItems) + '</ul></div>';
  html += '<div class="cm-card"><h5>' + labels.cm_link + '</h5><ul>' + linkItems.map(f => '<li>' + f + '</li>').join('') + '</ul></div>';
  html += '</div>';
  if(data.file){
    html += '<button class="cm-demo-btn" id="cmDemoBtn" data-file="' + data.file + '" data-title="' + subtitle.replace(/"/g, '&quot;') + '">' + demoLabel + '</button>';
  }
  html += '</div>';
  
  $('#clientModal').innerHTML = html;
  $('#clientOv').classList.add('open');
  document.body.style.overflow = 'hidden';
  
  const btn = $('#cmDemoBtn');
  if(btn){
    btn.onclick = function(){
      closeClientModal();
      openViewer(this.getAttribute('data-file'), this.getAttribute('data-title'));
    };
  }
}
function closeClientModal(){
  $('#clientOv').classList.remove('open');
  document.body.style.overflow = '';
}
$('#clientOv').addEventListener('click', function(e){
  if(e.target.id === 'clientOv') closeClientModal();
});
"""

new_content = new_content[:script_end] + functions + new_content[script_end:]

f = open('/root/.openclaw/workspace/projects/Retail_Experience_Studio/Demo/experience-studio-v2.html', 'w')
f.write(new_content)
f.close()

print('Done. Inserted client data and functions.')
