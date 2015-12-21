<?php

class Bed_Data extends  CI_Model{
    function __construct()
    {
        $this->size="Single";
        $this->frame="SupremeSteel";
        $this->legHeight="Regular";
        $this->cabinetGroup="Solid";
    }

    var $orientation;
    var $size;
    var $frame;
    var $legHeight;
    var $cabinetGroup;
    var $cabinet = 0;
    var $isLeftCabinet = false;
    var $isRightCabinet = false;
    var $leftUpperAccessory = 0;
    var $rightUpperAccessory = 0;
    var $leftUpperFinish = 0;
    var $rightUpperFinish = 0;
    var $isLeftNightTable = false;
    var $isRightNightTable = false;
    var $leftLowerAccessory = 0;
    var $leftLowerFinish = 0;

    public function getAll(){
        $query = $this->db->get("Bed_Data")->result();
        return $query;
    }

    public function get($id){
        $query = $this->db->where('Id',$id);
        return $query->get('Bed_Data')->row();
    }
}