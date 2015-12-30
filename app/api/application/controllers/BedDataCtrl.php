
<?php
defined('BASEPATH') OR exit('No direct script access allowed');
include APPPATH.'models/JsonResponse.php';
include APPPATH.'controllers/MyRESTCtrl.php';

class BedDataCtrl extends MyRESRCtrl
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('Bed_Data');
        $this->bedData = new Bed_Data();
    }

    private $bedData;

    public function get_beds()
    {
        try {
            $query = $this->bedData->get_beds();
            echo json_encode(new JsonResponse(200,$query));
        } catch (Exception $error) {
            echo json_encode(new JsonResponse(500));
        }
    }

    public function get_bed($id)
    {
        try {
            $query = $this->bedData->get_bed($id);
            echo json_encode(new JsonResponse(200,$query));
        } catch (Exception $e) {
            echo json_encode(new JsonResponse(500));
        }

    }
}