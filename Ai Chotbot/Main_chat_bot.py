import streamlit as st
from groq import Groq
from groq.types.chat import ChatCompletionMessageParam
import os
from dotenv import load_dotenv

load_dotenv()
st.set_page_config(page_title="chet bot", page_icon=":💌:", layout="wide")
clint = Groq(api_key=os.getenv("GROQ_API_KEY"))
if "messages" not in st.session_state:
    st.session_state.messages: list[ChatCompletionMessageParam] = [{'role': "user","content": "hii"},{"role": "assistant", "content": "Hello, how can I help you?"}]

for msg in st.session_state.messages:
    with st.chat_message(msg["role"]):
        st.markdown(msg["content"])

user_input = st.chat_input("Type your message here")
if user_input:
    st.session_state.messages.append({'role': "user", "content": user_input})
    
    response = clint.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=st.session_state.messages
    )
    reply = response.choices[0].message.content
    st.session_state.messages.append({"role": "assistant", "content": reply})
  