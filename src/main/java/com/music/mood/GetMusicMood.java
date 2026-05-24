package com.music.mood;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONObject;

import java.io.PrintWriter;

public class GetMusicMood extends HttpServlet {

    public void doGet (HttpServletRequest request , HttpServletResponse response){
        try{
            Cookie[] cookie = request.getCookies();
            String name = null;
            String mood = null;

            JSONObject result = new JSONObject();

            if(cookie != null){

                for (Cookie cookie1 : cookie) {
                    if(cookie1.getName().equals("User_name")){
                        name = cookie1.getValue();
                    }
                    else if(cookie1.getName().equals("Mood")){
                        mood = cookie1.getValue();
                    }
                }
                result.put("MESSAGE" , "SUCCESS");
            }
            else {
                result.put("MESSAGE" , "FAILED");
            }
            result.put("NAME" , name);
            result.put("MOOD" , mood);

            PrintWriter out = response.getWriter();
            out.println(result.toString());
            out.close();
        }
        catch (Exception e){
            System.out.println(e);
        }
    }
}
