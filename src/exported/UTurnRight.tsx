import IconUTurnRightFill0Wght100Grad0Opsz48 from '../components/UTurnRightFill0Wght100Grad0Opsz48'
import IconUTurnRightFill0Wght200Grad0Opsz48 from '../components/UTurnRightFill0Wght200Grad0Opsz48'
import IconUTurnRightFill0Wght300Grad0Opsz48 from '../components/UTurnRightFill0Wght300Grad0Opsz48'
import IconUTurnRightFill0Wght400Grad0Opsz48 from '../components/UTurnRightFill0Wght400Grad0Opsz48'
import IconUTurnRightFill0Wght500Grad0Opsz48 from '../components/UTurnRightFill0Wght500Grad0Opsz48'
import IconUTurnRightFill0Wght600Grad0Opsz48 from '../components/UTurnRightFill0Wght600Grad0Opsz48'
import IconUTurnRightFill0Wght700Grad0Opsz48 from '../components/UTurnRightFill0Wght700Grad0Opsz48'
import IconUTurnRightFill1Wght100Grad0Opsz48 from '../components/UTurnRightFill1Wght100Grad0Opsz48'
import IconUTurnRightFill1Wght200Grad0Opsz48 from '../components/UTurnRightFill1Wght200Grad0Opsz48'
import IconUTurnRightFill1Wght300Grad0Opsz48 from '../components/UTurnRightFill1Wght300Grad0Opsz48'
import IconUTurnRightFill1Wght400Grad0Opsz48 from '../components/UTurnRightFill1Wght400Grad0Opsz48'
import IconUTurnRightFill1Wght500Grad0Opsz48 from '../components/UTurnRightFill1Wght500Grad0Opsz48'
import IconUTurnRightFill1Wght600Grad0Opsz48 from '../components/UTurnRightFill1Wght600Grad0Opsz48'
import IconUTurnRightFill1Wght700Grad0Opsz48 from '../components/UTurnRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUTurnRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUTurnRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUTurnRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUTurnRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUTurnRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUTurnRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUTurnRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUTurnRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUTurnRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUTurnRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUTurnRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUTurnRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUTurnRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUTurnRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUTurnRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
