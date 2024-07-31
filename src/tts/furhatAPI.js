export async function askFurhat(hintText) {
    try {
        const response = await fetch('http://localhost:8080/ask', { // Ensure the URL points to your Furhat server
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: hintText
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const answer = await response.text();
        return answer;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return "I'm sorry, I couldn't process your request.";
    }
}

// export async function askFurhat(question) {
//     try {
//         const response = await fetch('http://localhost:8080/ask', { // Ensure the URL points to your Furhat server
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'text/plain'
//             },
//             body: question
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const answer = await response.text();
//         return answer;
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//         return "I'm sorry, I couldn't process your request.";
//     }
// }


// import axios from 'axios';

// export const sendHintToFurhat = async (hintText) => {
//     try {
//         const response = await axios.post('http://your-furhat-backend-endpoint/readHint', { text: hintText });
//         return response.data;
//     } catch (error) {
//         console.error('Error sending hint to Furhat:', error);
//         throw error;
//     }
// };