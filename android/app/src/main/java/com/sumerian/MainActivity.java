package com.sumerian;

import android.Manifest;
import android.content.pm.PackageManager;
import android.media.AudioManager;
import android.os.Build;
import android.os.Bundle;
import android.widget.Toast;
import androidx.core.content.ContextCompat;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  private static final int AUDIO_RECORD_REQUEST_CODE = 300;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    this.setVolumeControlStream(AudioManager.STREAM_MUSIC);
    if(!isRecordAudioPermissionGranted())
    {
      Toast.makeText(getApplicationContext(), "Need to request permission", Toast.LENGTH_SHORT).show();
    }
    else{
      Toast.makeText(getApplicationContext(), "No need to request permission", Toast.LENGTH_SHORT).show();
    }
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  private boolean isRecordAudioPermissionGranted()
  {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
      if (ContextCompat.checkSelfPermission(this, Manifest.permission.RECORD_AUDIO) ==
              PackageManager.PERMISSION_GRANTED) {
        // put your code for Version>=Marshmallow
        return true;
      } else {
        if (shouldShowRequestPermissionRationale(Manifest.permission.RECORD_AUDIO)) {
          Toast.makeText(this,
                  "App required access to audio", Toast.LENGTH_SHORT).show();
        }
        requestPermissions(new String[]{Manifest.permission.RECORD_AUDIO
        },AUDIO_RECORD_REQUEST_CODE);
        return false;
      }

    } else {
      // put your code for Version < Marshmallow
      return true;
    }
  }


  @Override
  protected String getMainComponentName() {
    return "Sumerian";
  }
}
