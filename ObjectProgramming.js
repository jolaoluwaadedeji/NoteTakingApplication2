/** Note Application Class**/


class NotesApplication{
		/** class constructor that instatiate an object**/

			constructor(author){
				this.author=author;
				let notes=[]
			}
		/** Create a notes list/array to store all the 
		notes as an instance property**/
		
			create(note_content){
			   
				this.notes.push();
			}
        /** This function lists out each of 
        the notes in the notes list in the following format**/
        	list(){
        		for(var i=0;i<notes.length;i++){
        		return "NOTEID:"+i+"  "+this.notes[i]+" "+this.author,'	
        		}
        	}
			
		}
		
		