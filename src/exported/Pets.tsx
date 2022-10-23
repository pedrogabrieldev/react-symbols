import IconPetsFill0Wght100Grad0Opsz48 from '../components/PetsFill0Wght100Grad0Opsz48'
import IconPetsFill0Wght200Grad0Opsz48 from '../components/PetsFill0Wght200Grad0Opsz48'
import IconPetsFill0Wght300Grad0Opsz48 from '../components/PetsFill0Wght300Grad0Opsz48'
import IconPetsFill0Wght400Grad0Opsz48 from '../components/PetsFill0Wght400Grad0Opsz48'
import IconPetsFill0Wght500Grad0Opsz48 from '../components/PetsFill0Wght500Grad0Opsz48'
import IconPetsFill0Wght600Grad0Opsz48 from '../components/PetsFill0Wght600Grad0Opsz48'
import IconPetsFill0Wght700Grad0Opsz48 from '../components/PetsFill0Wght700Grad0Opsz48'
import IconPetsFill1Wght100Grad0Opsz48 from '../components/PetsFill1Wght100Grad0Opsz48'
import IconPetsFill1Wght200Grad0Opsz48 from '../components/PetsFill1Wght200Grad0Opsz48'
import IconPetsFill1Wght300Grad0Opsz48 from '../components/PetsFill1Wght300Grad0Opsz48'
import IconPetsFill1Wght400Grad0Opsz48 from '../components/PetsFill1Wght400Grad0Opsz48'
import IconPetsFill1Wght500Grad0Opsz48 from '../components/PetsFill1Wght500Grad0Opsz48'
import IconPetsFill1Wght600Grad0Opsz48 from '../components/PetsFill1Wght600Grad0Opsz48'
import IconPetsFill1Wght700Grad0Opsz48 from '../components/PetsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPets = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPetsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPetsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPetsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPetsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPetsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPetsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPetsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPetsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPetsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPetsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPetsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPetsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPetsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPetsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
