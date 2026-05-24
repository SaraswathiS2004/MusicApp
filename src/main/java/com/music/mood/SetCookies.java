package com.music.mood;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.PrintWriter;


public class SetCookies extends HttpServlet {

    public void doPost(HttpServletRequest request , HttpServletResponse response) {
        try{

            BufferedReader reader = request.getReader();
            StringBuilder sb = new StringBuilder();
            String line;

            while((line = reader.readLine()) != null){
                sb.append(line);
            }
            String read = sb.toString();
            JSONObject obj = new JSONObject(read);

            if(obj.getString("TYPE").equals("SET_COOKIES")){
                String name = obj.getString("NAME");
                String mood = obj.getString("MOOD");
                String artist = obj.getString("ARTIST");
                Cookie namecookie = new Cookie("User_name" , name);
                Cookie moodCookie = new Cookie("Mood" , mood);
                Cookie artistCookie = new Cookie("Artist" , artist);
                namecookie.setMaxAge(60);
                moodCookie.setMaxAge(60);
                artistCookie.setMaxAge(60);
                response.addCookie(namecookie);
                response.addCookie(moodCookie);
                response.addCookie(artistCookie);
                PrintWriter out = response.getWriter();
                JSONObject result = new JSONObject();
                result.put("MESSAGE" , "Successfully added cookies");
                out.println(result.toString());
            }
        }
        catch (Exception e){
            System.out.println(e);
        }
    }
}
