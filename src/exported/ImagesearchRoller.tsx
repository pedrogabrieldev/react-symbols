import IconImagesearchRollerFill0Wght100Grad0Opsz48 from '../components/ImagesearchRollerFill0Wght100Grad0Opsz48'
import IconImagesearchRollerFill0Wght200Grad0Opsz48 from '../components/ImagesearchRollerFill0Wght200Grad0Opsz48'
import IconImagesearchRollerFill0Wght300Grad0Opsz48 from '../components/ImagesearchRollerFill0Wght300Grad0Opsz48'
import IconImagesearchRollerFill0Wght400Grad0Opsz48 from '../components/ImagesearchRollerFill0Wght400Grad0Opsz48'
import IconImagesearchRollerFill0Wght500Grad0Opsz48 from '../components/ImagesearchRollerFill0Wght500Grad0Opsz48'
import IconImagesearchRollerFill0Wght600Grad0Opsz48 from '../components/ImagesearchRollerFill0Wght600Grad0Opsz48'
import IconImagesearchRollerFill0Wght700Grad0Opsz48 from '../components/ImagesearchRollerFill0Wght700Grad0Opsz48'
import IconImagesearchRollerFill1Wght100Grad0Opsz48 from '../components/ImagesearchRollerFill1Wght100Grad0Opsz48'
import IconImagesearchRollerFill1Wght200Grad0Opsz48 from '../components/ImagesearchRollerFill1Wght200Grad0Opsz48'
import IconImagesearchRollerFill1Wght300Grad0Opsz48 from '../components/ImagesearchRollerFill1Wght300Grad0Opsz48'
import IconImagesearchRollerFill1Wght400Grad0Opsz48 from '../components/ImagesearchRollerFill1Wght400Grad0Opsz48'
import IconImagesearchRollerFill1Wght500Grad0Opsz48 from '../components/ImagesearchRollerFill1Wght500Grad0Opsz48'
import IconImagesearchRollerFill1Wght600Grad0Opsz48 from '../components/ImagesearchRollerFill1Wght600Grad0Opsz48'
import IconImagesearchRollerFill1Wght700Grad0Opsz48 from '../components/ImagesearchRollerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconImagesearchRoller = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconImagesearchRollerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconImagesearchRollerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconImagesearchRollerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconImagesearchRollerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconImagesearchRollerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconImagesearchRollerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconImagesearchRollerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconImagesearchRollerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconImagesearchRollerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconImagesearchRollerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconImagesearchRollerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconImagesearchRollerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconImagesearchRollerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconImagesearchRollerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
