<?php

use Crater\Models\Setting;
use Illuminate\Database\Migrations\Migration;

class UpdateCraterVersion603 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Setting::setSetting('version', '6.0.3');
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
