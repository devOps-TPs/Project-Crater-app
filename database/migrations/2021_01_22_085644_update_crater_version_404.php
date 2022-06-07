<?php

use Crater\Models\Setting;
use Illuminate\Database\Migrations\Migration;

class UpdateCraterVersion404 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Setting::setSetting('version', '4.0.4');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
