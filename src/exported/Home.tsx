
  import HomeFilled100 from '../components/HomeFilled100'
  import HomeFilled200 from '../components/HomeFilled200'
  import HomeFilled300 from '../components/HomeFilled300'
  import HomeFilled400 from '../components/HomeFilled400'
  import HomeFilled500 from '../components/HomeFilled500'
  import HomeFilled600 from '../components/HomeFilled600'
  import HomeFilled700 from '../components/HomeFilled700'
  import HomeOutlined100 from '../components/HomeOutlined100'
  import HomeOutlined200 from '../components/HomeOutlined200'
  import HomeOutlined300 from '../components/HomeOutlined300'
  import HomeOutlined400 from '../components/HomeOutlined400'
  import HomeOutlined500 from '../components/HomeOutlined500'
  import HomeOutlined600 from '../components/HomeOutlined600'
  import HomeOutlined700 from '../components/HomeOutlined700'

  import { IconTemplateProps } from '../IconTemplate.types'

  export const Home = ({ variant, size = 48, weight = '400', color }: IconTemplateProps) => {
    switch (true) {
      case variant === 'filled' && weight === '100':
        return <HomeFilled100 size={size} color={color} />
      case variant === 'filled' && weight === '200':
        return <HomeFilled200 size={size} color={color} />
      case variant === 'filled' && weight === '300':
        return <HomeFilled300 size={size} color={color} />
      case variant === 'filled' && weight === '400':
        return <HomeFilled400 size={size} color={color} />
      case variant === 'filled' && weight === '500':
        return <HomeFilled500 size={size} color={color} />
      case variant === 'filled' && weight === '600':
        return <HomeFilled600 size={size} color={color} />
      case variant === 'filled' && weight === '700':
        return <HomeFilled700 size={size} color={color} />
      case variant === 'outlined' && weight === '100':
        return <HomeOutlined100 size={size} color={color} />
      case variant === 'outlined' && weight === '200':
        return <HomeOutlined200 size={size} color={color} />
      case variant === 'outlined' && weight === '300':
        return <HomeOutlined300 size={size} color={color} />
      case variant === 'outlined' && weight === '400':
        return <HomeOutlined400 size={size} color={color} />
      case variant === 'outlined' && weight === '500':
        return <HomeOutlined500 size={size} color={color} />
      case variant === 'outlined' && weight === '600':
        return <HomeOutlined600 size={size} color={color} />
      case variant === 'outlined' && weight === '700':
        return <HomeOutlined700 size={size} color={color} />
      default:
        return null
    }
  }
