#ifndef PRESURE_SENSSOR_H
#define PRESURE_SENSSOR_H

#include <Arduino.h>
#include "lcd/lcd.h"

void    pressureSensorInit(void);
float   getPressure(void);
bool    isPressureFalling(void);
bool    isPressureFallingFast(void);
bool    isPressureRaising(void);
int8_t  getAdsError(void);

#endif
