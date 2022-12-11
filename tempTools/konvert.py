#basic python scripts to write the boring js code for you 
#takes a text file (path to text file has to be adjusted in the code)
#where exercised are seperated using ':' ans text is seperated from highloighted text with ';'
#prints the js code to console however some adjustemnts such as the titles still have to be  made manually


scenarios = open('/home/tim/Documents/scenarios.txt', 'r')
fulltext = ''
for line in scenarios.readlines():
    fulltext = fulltext + line.replace('\n','').replace('\n','')
scenarios.close()
splitOne = fulltext.split(':')

for content in splitOne:
    if ';' in content:
        splitContent = content.split(';')
        print('const title = () => { baseText: ' + splitContent[0] + ', highlightedText: ' + splitContent[1] + ", task: ")