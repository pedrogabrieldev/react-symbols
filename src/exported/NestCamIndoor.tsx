import IconNestCamIndoorFill0Wght100Grad0Opsz48 from '../components/NestCamIndoorFill0Wght100Grad0Opsz48'
import IconNestCamIndoorFill0Wght200Grad0Opsz48 from '../components/NestCamIndoorFill0Wght200Grad0Opsz48'
import IconNestCamIndoorFill0Wght300Grad0Opsz48 from '../components/NestCamIndoorFill0Wght300Grad0Opsz48'
import IconNestCamIndoorFill0Wght400Grad0Opsz48 from '../components/NestCamIndoorFill0Wght400Grad0Opsz48'
import IconNestCamIndoorFill0Wght500Grad0Opsz48 from '../components/NestCamIndoorFill0Wght500Grad0Opsz48'
import IconNestCamIndoorFill0Wght600Grad0Opsz48 from '../components/NestCamIndoorFill0Wght600Grad0Opsz48'
import IconNestCamIndoorFill0Wght700Grad0Opsz48 from '../components/NestCamIndoorFill0Wght700Grad0Opsz48'
import IconNestCamIndoorFill1Wght100Grad0Opsz48 from '../components/NestCamIndoorFill1Wght100Grad0Opsz48'
import IconNestCamIndoorFill1Wght200Grad0Opsz48 from '../components/NestCamIndoorFill1Wght200Grad0Opsz48'
import IconNestCamIndoorFill1Wght300Grad0Opsz48 from '../components/NestCamIndoorFill1Wght300Grad0Opsz48'
import IconNestCamIndoorFill1Wght400Grad0Opsz48 from '../components/NestCamIndoorFill1Wght400Grad0Opsz48'
import IconNestCamIndoorFill1Wght500Grad0Opsz48 from '../components/NestCamIndoorFill1Wght500Grad0Opsz48'
import IconNestCamIndoorFill1Wght600Grad0Opsz48 from '../components/NestCamIndoorFill1Wght600Grad0Opsz48'
import IconNestCamIndoorFill1Wght700Grad0Opsz48 from '../components/NestCamIndoorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestCamIndoor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestCamIndoorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestCamIndoorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestCamIndoorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestCamIndoorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestCamIndoorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestCamIndoorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestCamIndoorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestCamIndoorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestCamIndoorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestCamIndoorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestCamIndoorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestCamIndoorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestCamIndoorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestCamIndoorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
