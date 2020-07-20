package com.prush.hellomarvel;

import android.widget.Toast;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;


@NativePlugin()
public class EchoPlugin extends Plugin {

    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);

        MainActivity activity = (MainActivity) getActivity();
        Toast.makeText(activity.getApplicationContext(), value + " & " + activity.stringFromJNI(), Toast.LENGTH_LONG).show();
    }
}