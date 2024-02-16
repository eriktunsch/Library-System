<?php

namespace de\eriktunsch\library\user;

class Login
{
    public function isLoggedin()
    {
        if (isset($_SESSION['username'])) {
            if (!(new User())->error) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}
