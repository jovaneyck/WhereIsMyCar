package com.smartapps.whereismycarapp;

import android.os.Bundle;
import org.apache.cordova.*;

public class WhereIsMyCar extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.setBooleanProperty("keepRunning", false); //when exiting the app, do not run in background
        super.loadUrl("file:///android_asset/www/html/index.html");
    }

}
