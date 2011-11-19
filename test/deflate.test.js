var assert = require('assert');
var Buffer = require('buffer').Buffer;
var _zlib = require('_zlib');

exports['test deflate/inflate buffer'] = function(beforeExit) {
    var input = new Buffer('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    var compressed = _zlib.deflate(input);
    var output = _zlib.inflate(compressed);
    assert.deepEqual(input, output);
};

exports['test deflate/inflate with high compression ratio'] = function(beforeExit) {
    var input = new Buffer('["                                     !!!!!!!########################$$$$$$$$$$$$$$$$%%%%%%%%%%      %%%%%%%%%%%%%%%%    %      %","                                      !!!!!!########################$$$$$$$$$$$$$$$$$%%%%%%%%%%%      %%%%%%%%%%%%%     %%%%  %%","                                       !!!!!########################$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%         %%%%%%%     %%%%%% %%","                                     !!!!!###########################$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%         %%%       %%%%%%%%%%","                                      !!!!###########################$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%                 %%%%%%%%%%%%","                                    !!!!!!######################  ###$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%                %%%%%%%%%%%%","                                  !  !!!!!######################       $$$$$$$$$$$$$$%%%%%%%%%%%%%%               %%%%%%%%%%%%%%","                                   !!!!!!!#####################         $$$$$$$$$$$$$%%%%%%%%%%%%%%              %%%%%%%%%%%%%%%","                                   !!!!!!!####################           $$$$$$$$$$$$%%%%%%%%%%%%%                %%%%%%%%%%%%%%","                                    !!!!!#####################          $$$$$$$$$$$$$%%%%%%%%%%%%%%               %%%%%%%%%%%%%%","                                 !  !!!!!#####################           $$$$$$$$$$$$%%%%%%%%%%%%%%   %  %%%       %%%%%%%%%%%%%","                               ! !!!!!!!#####################           $$$$$$$$$$$$$%%%%%%%%%%%%%%%    %%%%       %%%%%%%%%%%%%","                                  !!!!!!#####################         $$$$$$$$$$$$$$$$%%%%%%%%%%%%%%    %%%%% %     %%%%%%%%%%%%","                                 !!!!!!######################         $$$$$$$$$$$$$$$$%%%%%%%%%%%%%%     %%%%%%%   %%%%%%%%%%%%%","                               ! !!!!!!!!#####################       $$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%      %%%%%%%%%%%%%%%%%%%%%%","                              !!!!!!!!!!!####################        $$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%      %%%%%%%%%%%%%%%%%%%%","                             !!!!!!!!!!!!###################        $$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%     %%%%%%%%%%%%%%%%%%%","                             !!! !!!!#######################       $$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%     %%%%%%%%%%%%%%%%%%%","                            !!!! !!!########################     $$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%% %%%%%%%%%%%%%%%%%%%%%","                         !   !! !!!!#######################       $$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                        !!!! !  !!!######################       $$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                       ! ! !!!!!!!!####################         $$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                       !!!!!!!!!!!!####################       $ $$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                      !!!!!!!!!!!!!##################         $$$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                    !!!! !!!!!!!!!!##################        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                    !!!! !!!!!!!!!!#################         $$$$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                  !!! !!!!!!!!!!!!!#################        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                  !!!!!!!!!!!!!!!!!###############           $$$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                !!!!!!!!!!!!!!!!!!!###############           $$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","               !!!!!!!!!!!!!!!!!!!!###############           $$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","               !!!!!!!!!!!!!!!!!!!!###############           $$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","               !!!!!!!!!!!!!!!!!!!!###############            $$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","               !!!!!!!!!!!!!!!!!!!!!#############             $$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","               !!!!!!!!!!!!!!!!!!!!!!############             $$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","               !!!!!!!!!!!!!!!!!!!!!!############             $$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","              !  ! !!!!!!!!!!!!!!!!!!############            $$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","               !!!!!!!!!!!!!!!!!!!!##############            $$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","               !!!!!!!!!!!!!!!!!!!!!##############           $$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","               !!!!!!!!!!!!!!!!!!!!!################         $ $$$$$$$$$$$$$ $$$% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","               !!!! !!!!!!!!!!!!!!!!################          $ $$$$$$$$$$$$      %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                !!!!!!!!!!!!!!!!!!!!#################   & &     $ $$$$$$ $         %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                ! !!!!!!!!!!!!!!!!!!##################   &      $ $$$$                %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","               ! !!!!!!!!!!!!!!!!!#####################           $                %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                 !!!!!!!!!!!!! !!!####################                          %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","               !!! !!!!!!!!!!! !!!############## #####                   \'\'\'    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                ! !!!!!!!!!!!! !!!###################                \'\'\'\'\'\'\'\'\'\'\'\'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                  !!!!!!!!!!!! !!!###################              \'\'\'\'\'\'\'\'\'\'\'\'\'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                !!!!!!!!!!!!    #!##################            \'\'\'\'\'\'\'\'\'\'\'\'\'\'\'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                !!!!!!!!!!!     ##################              \'\' \'\'\'\'\'\'\'\'\'\'\'\'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                !!!!!!!!!!       ################                 \'\'\'\'\'\'\'\'\'\'\'\'\'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                 !!!!!!!!       ################               \'\'\'\' \'\'\'\'\'\'\'\'\'\'\'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                   !!!!!!        ###############               \'\'     \'\'\'\'\'\'\'\'\'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                   !!!!           ##############               \'      \'\'(\'\'\'\'\'\'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                                  #############       #               ((((\'\'\'\'\'\'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                              )   ##############     #          (     (((((\'\'\'\'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                             )    ##############    ##        (((     (((((((((%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                            ))     ############     ##        ((((    ((((((((((%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                          ))))     ############     #        ((((((  (((((((((((%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                        )  )))      ########### #   #        ((((((((((((((((((%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                        )) )))      ###########             ((((((((((((((((((((%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                        ))))))       ###########            ((((((((((((((((((((%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                        ))))))))     ######### #            (((****((((*(((((((((%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                        )))))))     ##########              (************((((((((%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                        )))))))   )) ####                   **************(((((+++%+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                        ))))) )  ))) ####                   ***************((+++++++%++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                        )))) )  )))) ####                    ***************++++++++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                        )))) )) ))))  #                      ***************++++++++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                         ))) ))   )       )                  %**************+++++++++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                         )))) )    )                         %%%%**********++++++++++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                         ,,,,   )))                --    %%%%%%%%*********++++++++++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                          ,,,     )   ,         -----     %%%%%%%*********+++++++++++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                         ,,,,,,     ,,,,       ------- ----%%%%%%-*******+++++++++++++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                          ,,,,,,  ,,,,,,    -----------------------*****+*++++++++++++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                        , ,,,,,  ,,,,,,,, -------------------------***+++++++++++++++++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",".                        ,,,,,,,,,,,,,,,  --------------------------+++++++++++++++++++++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","                     ,,,,,,,,,,,,,,,,,,,,---------------------------+++++++++++++++++++++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",".                /// ,,,,,,,,,,,,,,,,,,,,---------------------------+++++++++++++++++++++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",".               /////,,,,,,,,,,,,,,,,,,,,---------------------------++++++++++++++++++++++%+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",". ..            /////,,,,,,,,,,,,,,,,,,,,----------------------------+++++++++++++++++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",".....         ///////,,,,,,,,,,,,,,,,,,,,,---------------------------+++++++++++++++++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",".....         //////,,,,,,,,,,,,,,,,,,,,,,-------------------------+++++++++++++++++++++++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",".....        ////////,,,,,,,,,,,,,,,,,,,,,------------------------+++++++++++++++++++++++++%%0000%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",".....       ////////,,,,,,,,,,,,,,,,,,,,,,--------------------------++++++++++++++++++++000000000%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","....        //////,,,,,,,,,,,,,,,,,,,,,,,,--------------------------++000000++++++++++++0000000000%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","...         //////,,,,,,,,,,,,,,,,,,,,,,,,-------------------------+0000000000+++++0+++00000000000%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","..        ///11///,,,,,,,,,,,,,,,,,,,,,,,,,-------------------------0000000000000000000+0000000000%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",".....   111111111/,,,,,,,,,,,,,,,,,,,,,,,,,-------------------------0000000000000000000000000000000%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","...   22111111111/,,,,,,,,,,,,,,,,,,,,,,,3,3-------------------------00000000000000000000000000000000%%%%%%%%%%%%%%%%%%%%%%%%%%%","     2222211111111,,,,,,,,,,,,,,,,,,,,,,33333------------------------00000000000000000000000000000000%%%%%%%%%%%%%%%%%%%%%%%%%%%","     2222221111111,,,,,,,,,,,,,,,,,,,,333333333----------------------00000000000000000000000000000000%%%%%%%%%%%%%%%%%%%%%%%%%%%","     2222222111111,,,,,,,,,,,,,,,,,,33333333333--3------------------000000000000000000000000000000000000%00%%%%%%%%%%%%%%%%%%%%%","    22222222111114,,,,,,,,,,,,,,,,,3333333333333333----------------00000000000000000000000000000000000000000%0%%%%%%%%%%%%%%%%%%","  22222222222211144,,,,,,,,,,,,,,,,,33333333333333333-------------000000000000000000000000000000000000000000000%%%%%%%%%%%%%%%%%"," 222222222222222144,,,,,,,,,,,,,,,,,333333333333333333-----------000000000000000000000000000000000000000000000000%0%%%%%%%%%%%%%"," 222222222222222222,,,,,,,,,,,,,,,,,,33333333333333335555-55555--00000000000000000000000000000000000000000000000000%%%%%%%%%%%%%","2222222222222222222222,,,,,,,,,,,,,,,,33333333333333555555555555-0000000000000000000000000000000000000000000000000%%%%%%%%%%%%%%","222222222222222222222222,,,,,,,,,,,,,,,333366333333555555555555500000000000000000000000000000000000000000000000000%%%%%%%%%%%%%%","22222222222222222222222,,,,,,,,,,,,,,,,,3366666665555555555555550000000000000000000000000000000000000000000000000%%%%%%%%%%%%%%%","22222222222222222222222,,,,,,,,,,,,,,,,666666666555555555557775500000000000000000000000000000000000000000000000000%%%%%%%%%%%%%%","2222222222222222222222,,,,,,,,,,,,,,,66666666666655555557577777770000000000089990000000000000000000000000000000000%%%%%%%%%%%%%%","2222222222222222222222,,,,,,,,,,,,,,,66666666666675555777777777777880000000888999990000000000000000000000000000000%%%%%%%%%%%%%%","2222222222222222222222,,,,,,,,,,,,,,,66666666666677757777777777788888880888888999999000000000000000000000000000%%%%%%%%%%%%%%%%%","2222222222222222222222::::::6,66,6666,66666666667777777777777778888888888888888999900000000000000000000000000%%%%%%%%%%%%%%%%%%%","22222222222222222222::::::::6,6666666666666666677777777777777778888888888888888999999000000000000000000000000%%%%%%%%%%%%%%%%%%%","22222222222222222222::::::::6666666666666666666777777777777777888888888888888888999990000000000000000000000     %%%%%%%%%%%%%%%%","2222222222222222222:::::::::::;6;;;;6666666666<7777777777777778888888888888888888999990000000000000000000     %%%%%%%%%%%%%%%%%%","222222222222222222:::::::::::;;;;;;;;;;6666<<<<77777777777777888888888888888888889999900    0000000000      %%%%%%%%%%%%%%%%%%%%","22222222222222222222::::;::;;;;;;;;;;;;<<<<<<<===777777777777888888888888888888889900000   000000000         %%%%%%%%%%%%%%%%%%%","22222222222222222222:::;;;;;;;;;;;;;;;;<<<<<<=====777777>>88888888888888888888889990000        00 00         %%%%%%%%%%%%%%%%%%%","22222222222222222222;;;;;;;;;;;;;;;;;;;<<<<<<======77=>>>>>888888888888888888888890000          000         %%%%%%%%%%%%%%%%%%%%","22222222222222222222;;;;;;;;;;;;;;;;;   <<<<==========>>>>>>8888888888888888888899000         000000       %%%%%%%%%%%%%%%%%%%%%","222222222222222222222;;;;;;;;;;;;;;    ================>>>>>8888888888888888888880088         000000  000%  %%%%%%%%%%%%%%%%%%%%","2222222222222222222;;;;;;;;;;;;;;;;;   ==  ==?=????=?==>>>>>>>88888888888888888888888           00000 00 %%%%%%%%%%%%%%%%%%%%%%%","22222222222222222222;;;;;;;;;;;;;;;      = ==???????????>>>>>888888888888888888888888           0000       %%%%%%%%%%%%%%%%%%%%%","22222222222222222222;;;;;;;;;;;;;;;      = ===?????????>>>>>>>>8>88888888888888888             000           %%%%%%%%%%%%%%%%%%%","22222222222222222222;;;;;  ;;;;;;;;;       ====????????>>>>>>>>>>88888888888888888                            %%%%%%%%%%%%%%%%%%","2222222222222222222222;;    ;;;;;;;;        ===?????????>>>>>>>>>@88888888888@8888                              %%%%%%%%%%%%%%%%","2222222222222222222222;       ;;;;;;;;       ===????????>>>>>>>>@@88888888@@@@@@88                               %%%%%%%%%%%%%%%","222222222222222222222         ;;;;;;;;;       ===???????>>>>>>>>@@@@@@@@@@@@@@@@@@                                %%%%%%%%%%%%%%","22222222222     222           ;;;;;;;;;;       = =?????A>>>>>>>>>@@@@@@@@@@@@@@@                                   BBB%%%%%%%%%%","222222222                     ;;;;;;;;;;      =   =???AAA>>>>>>>>>@@@@@@@@@@@@@@                                     BBBBBB%%%%%","22C222222                      ;;;;;;;;;           ??AAAAA>>>>>>@@@@@@@@@@@@@@@@                                     BBBBBBBB%%%","CCCCC2222                222    ;;;;;;;;;           =AAADD>>>>>>@@@@@@@@@@@@@@@                                        BBBBBBBBB","CCCCCCCCCC               222      ;;;;;;;;            AADDD>>>>E@@@@@@@@@@@@@@@                                        BBBBBBBBB","CCCCCCCCCC               22       ;;;;;;;;;            ADDD>EEEEE@@@@@@@@@@@@F@@                                       BBBBBBBBB","CCCCCCCCC                22        ;;;;;;;;;;;;         DDDEEEEEEE@@@@@@@@@FFFFF             FFFFFFFF                  BBBBBBBBB","CCCCCCC                   2         ;;;;;;;;;;          DDDEEEEEEE@@@G@@@@@GFFFFF          FFFFFFFFFFFF                BBBFBBBBB","CCCCCC                                  ;;;;;;;         DDDEEEEEEGGGGGGGGGGFFFFFFFF       FFFFFFFFFFFFFFFF           FFFFFFBBBBB"]');
    var compressed = _zlib.deflate(input);
    var output = _zlib.inflate(compressed);
    assert.deepEqual(input, output);
};

exports['test inflate #2'] = function(beforeExit) {
    var compressed = new Buffer('\x78\x9c\xab\x56\x4a\x2f\xca\x4c\x51\xb2\x8a\x56\x52\xa0\x10\x28\xe9\x8c\x1a\x31\x6a\xc4\xa8\x11\xa3\x46\x8c\x1a\x31\x6a\xc4\xa8\x11\xa3\x46\x8c\x1a\x31\x6a\x04\x12\x50\x04\x02\x2a\x18\x01\x01\x64\x1b\x81\x64\x06\xdc\x10\xd2\x8c\x50\x44\x36\x02\x66\x06\x05\xae\x80\x99\x41\x72\x8c\x60\x9a\x41\x46\xa4\x0e\x0e\x23\x80\x81\xaa\x40\xa9\x11\x0a\x28\x46\x28\x52\xe6\x0a\x45\x0a\x8c\x40\x0e\x10\xf2\xb3\x19\x15\x8c\x80\x1b\x42\x69\x66\x57\x54\x54\xa6\xbc\xbc\xa0\x82\x11\x43\xb3\xe0\x1b\x42\x46\xa8\x50\xc1\x15\x2a\xa4\x1a\x42\xb9\x47\x54\x95\x62\x75\x94\xb2\x53\x2b\x8b\x41\x03\x19\x40\xe3\x7c\x23\x80\x84\x7b\x08\x90\xf0\x0e\x02\x12\xae\xce\x4a\xb1\xb5\x00\x83\x32\x27\xf3', 'binary');
    var output = _zlib.inflate(compressed);
    assert.equal(output.toString(), '{"grid":["                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                            !!!!                ","                                            !!!!!!!!!!          ","                                             !!!!!!!!!!!        ","                                           ! !!!!!!!!!!!!       ","                                             !!!!!!!!!!!!!      ","                                              !!!!!!!!!!!!!     ","                                                !!!!!!!!!!!     ","                                                !!!!!!!!!!!     ","                                                 !  !!!!!!!     ","                                                    !!!!!!!    !","                                                 !  !!!!!!!!   !","                                                 !   !!!!!!!!!!!","                                                       !!!!!!!!!","                                                         !!!!!!!","                                                             !!#","                                                               #","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","                                                                ","              $                                                 ","               $$                                               ","                                                               %"],"keys":["","MX","GT","KR","EC"]}');
};
