# GUIDE D'AJOUT DES SECTIONS MOI & BTS

## À AJOUTER APRÈS LA SECTION HERO (ligne ~700)

```html
<!-- About Me Section -->
<section id="about">
    <div class="container">
        <h2 class="lang-fr">👋 À Propos de Moi</h2>
        <h2 class="lang-en hidden">👋 About Me</h2>

        <div class="glass-card glass">
            <div style="display: flex; gap: 3rem; align-items: center;">
                <div style="width: 200px; height: 200px; border-radius: 20px; background: linear-gradient(135deg, var(--accent), var(--accent-light)); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 5rem; color: white;">
                    💻
                </div>
                <div>
                    <h3 style="font-size: 1.8rem; color: var(--title-color); margin-bottom: 1rem;" class="lang-fr">Passionné par l'Infrastructure IT</h3>
                    <h3 style="font-size: 1.8rem; color: var(--title-color); margin-bottom: 1rem;" class="lang-en hidden">Passionate about IT Infrastructure</h3>
                    
                    <p class="lang-fr" style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem;">
                        Je suis Arsène Caron, étudiant en BTS SIO option SISR à INGETIS Paris. Passionné 
                        par les technologies de l'infrastructure et des réseaux, je me spécialise dans 
                        l'administration des systèmes, la virtualisation et la sécurisation des infrastructures IT.
                    </p>
                    <p class="lang-en hidden" style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem;">
                        I'm Arsène Caron, BTS SIO SISR student at INGETIS Paris. Passionate about infrastructure 
                        and network technologies, I specialize in systems administration, virtualization and 
                        IT infrastructure security.
                    </p>

                    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
                        <span style="padding: 0.6rem 1.2rem; background: rgba(94, 175, 198, 0.1); border: 1px solid var(--accent); border-radius: 20px; color: var(--accent); font-weight: 600; font-size: 0.9rem;" class="lang-fr">🎯 Rigoureux</span>
                        <span style="padding: 0.6rem 1.2rem; background: rgba(94, 175, 198, 0.1); border: 1px solid var(--accent); border-radius: 20px; color: var(--accent); font-weight: 600; font-size: 0.9rem;" class="lang-fr">💡 Curieux</span>
                        <span style="padding: 0.6rem 1.2rem; background: rgba(94, 175, 198, 0.1); border: 1px solid var(--accent); border-radius: 20px; color: var(--accent); font-weight: 600; font-size: 0.9rem;" class="lang-fr">🚀 Motivé</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- BTS Section -->
<section id="bts">
    <div class="container">
        <h2 style="font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; margin-bottom: 3rem; color: var(--title-color);" class="lang-fr">
            🎓 BTS SIO - SISR
        </h2>

        <div class="glass-card glass">
            <span class="badge lang-fr">INGETIS Paris - 5ème arrondissement</span>
            
            <h3 style="font-size: 1.8rem; margin: 1rem 0; color: var(--title-color);" class="lang-fr">
                Services Informatiques aux Organisations
            </h3>

            <p class="lang-fr" style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Le BTS SIO option SISR forme des techniciens capables d'installer, administrer et sécuriser 
                des infrastructures systèmes et réseaux. Formation de 2 ans à INGETIS Paris.
            </p>

            <!-- Programme -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; margin: 2rem 0;">
                <div style="padding: 2rem; border-left: 4px solid var(--accent);" class="glass">
                    <h4 style="font-size: 1.5rem; color: var(--title-color); margin-bottom: 1rem;" class="lang-fr">
                        📚 Première Année
                    </h4>
                    <ul style="list-style: none;">
                        <li style="padding-left: 1.5rem; margin-bottom: 0.7rem; position: relative; color: var(--text-secondary);">
                            <span style="position: absolute; left: 0; color: var(--accent); font-weight: 700;">▸</span>
                            Fondamentaux des réseaux (TCP/IP, modèle OSI)
                        </li>
                        <li style="padding-left: 1.5rem; margin-bottom: 0.7rem; position: relative; color: var(--text-secondary);">
                            <span style="position: absolute; left: 0; color: var(--accent); font-weight: 700;">▸</span>
                            Administration Windows Server & Linux
                        </li>
                        <li style="padding-left: 1.5rem; margin-bottom: 0.7rem; position: relative; color: var(--text-secondary);">
                            <span style="position: absolute; left: 0; color: var(--accent); font-weight: 700;">▸</span>
                            Virtualisation (VMware, Hyper-V)
                        </li>
                        <li style="padding-left: 1.5rem; margin-bottom: 0.7rem; position: relative; color: var(--text-secondary);">
                            <span style="position: absolute; left: 0; color: var(--accent); font-weight: 700;">▸</span>
                            Cybersécurité niveau 1
                        </li>
                    </ul>
                </div>

                <div style="padding: 2rem; border-left: 4px solid var(--accent);" class="glass">
                    <h4 style="font-size: 1.5rem; color: var(--title-color); margin-bottom: 1rem;" class="lang-fr">
                        🚀 Deuxième Année
                    </h4>
                    <ul style="list-style: none;">
                        <li style="padding-left: 1.5rem; margin-bottom: 0.7rem; position: relative; color: var(--text-secondary);">
                            <span style="position: absolute; left: 0; color: var(--accent); font-weight: 700;">▸</span>
                            Architectures réseau avancées (VLAN, routage)
                        </li>
                        <li style="padding-left: 1.5rem; margin-bottom: 0.7rem; position: relative; color: var(--text-secondary);">
                            <span style="position: absolute; left: 0; color: var(--accent); font-weight: 700;">▸</span>
                            Active Directory et stratégies de groupe
                        </li>
                        <li style="padding-left: 1.5rem; margin-bottom: 0.7rem; position: relative; color: var(--text-secondary);">
                            <span style="position: absolute; left: 0; color: var(--accent); font-weight: 700;">▸</span>
                            Cloud Computing (Azure, AWS)
                        </li>
                        <li style="padding-left: 1.5rem; margin-bottom: 0.7rem; position: relative; color: var(--text-secondary);">
                            <span style="position: absolute; left: 0; color: var(--accent); font-weight: 700;">▸</span>
                            Projets professionnels (E4, E5)
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Vidéo YouTube -->
            <h4 style="color: var(--title-color); margin: 2rem 0 1rem; font-size: 1.3rem;" class="lang-fr">
                📹 Découvrir le BTS SIO
            </h4>

            <div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 20px; margin: 2rem 0;">
                <iframe 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 20px;"
                    src="https://www.youtube.com/embed/kfgHfSGnSfA" 
                    title="Présentation BTS SIO" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>

        <!-- Certifications -->
        <h3 style="color: var(--title-color); margin: 3rem 0 2rem; font-size: 2rem;" class="lang-fr">
            🏆 Mes Certifications
        </h3>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
            <div style="padding: 2rem; border-radius: 20px; text-align: center; position: relative; overflow: hidden;" class="glass">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--accent), var(--accent-light));"></div>
                <div style="width: 80px; height: 80px; margin: 0 auto 1rem; background: linear-gradient(135deg, var(--accent), var(--accent-light)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem;">📡</div>
                <h4 style="font-size: 1.2rem; color: var(--title-color); margin-bottom: 0.5rem;">Cisco CCNA</h4>
                <p style="font-size: 0.85rem; color: var(--accent); font-weight: 600; text-transform: uppercase; letter-spacing: 1px;" class="lang-fr">En cours</p>
            </div>

            <div style="padding: 2rem; border-radius: 20px; text-align: center; position: relative; overflow: hidden;" class="glass">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--accent), var(--accent-light));"></div>
                <div style="width: 80px; height: 80px; margin: 0 auto 1rem; background: linear-gradient(135deg, var(--accent), var(--accent-light)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem;">🔒</div>
                <h4 style="font-size: 1.2rem; color: var(--title-color); margin-bottom: 0.5rem;">SecNum</h4>
                <p style="font-size: 0.85rem; color: var(--accent); font-weight: 600; text-transform: uppercase; letter-spacing: 1px;" class="lang-fr">Obtenue</p>
            </div>

            <div style="padding: 2rem; border-radius: 20px; text-align: center; position: relative; overflow: hidden;" class="glass">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--accent), var(--accent-light));"></div>
                <div style="width: 80px; height: 80px; margin: 0 auto 1rem; background: linear-gradient(135deg, var(--accent), var(--accent-light)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem;">🌐</div>
                <h4 style="font-size: 1.2rem; color: var(--title-color); margin-bottom: 0.5rem;">Cisco NetAcad</h4>
                <p style="font-size: 0.85rem; color: var(--accent); font-weight: 600; text-transform: uppercase; letter-spacing: 1px;" class="lang-fr">Obtenue</p>
            </div>

            <div style="padding: 2rem; border-radius: 20px; text-align: center; position: relative; overflow: hidden;" class="glass">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--accent), var(--accent-light));"></div>
                <div style="width: 80px; height: 80px; margin: 0 auto 1rem; background: linear-gradient(135deg, var(--accent), var(--accent-light)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem;">📋</div>
                <h4 style="font-size: 1.2rem; color: var(--title-color); margin-bottom: 0.5rem;" class="lang-fr">Atelier RGPD CNIL</h4>
                <p style="font-size: 0.85rem; color: var(--accent); font-weight: 600; text-transform: uppercase; letter-spacing: 1px;" class="lang-fr">Obtenue</p>
            </div>

            <div style="padding: 2rem; border-radius: 20px; text-align: center; position: relative; overflow: hidden;" class="glass">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--accent), var(--accent-light));"></div>
                <div style="width: 80px; height: 80px; margin: 0 auto 1rem; background: linear-gradient(135deg, var(--accent), var(--accent-light)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem;">💰</div>
                <h4 style="font-size: 1.2rem; color: var(--title-color); margin-bottom: 0.5rem;">CoinAcademy</h4>
                <p style="font-size: 0.85rem; color: var(--accent); font-weight: 600; text-transform: uppercase; letter-spacing: 1px;" class="lang-fr">Obtenue</p>
            </div>
        </div>
    </div>
</section>
```

## DANS LA NAVIGATION (modifier ligne ~650)

Remplacer :
```html
<li><a href="#home">...
<li><a href="#experience">...
```

Par :
```html
<li><a href="#home" class="lang-fr">Accueil</a><a href="#home" class="lang-en hidden">Home</a></li>
<li><a href="#about" class="lang-fr">Moi</a><a href="#about" class="lang-en hidden">About</a></li>
<li><a href="#bts" class="lang-fr">BTS</a><a href="#bts" class="lang-en hidden">BTS</a></li>
<li><a href="#experience" class="lang-fr">Expérience</a><a href="#experience" class="lang-en hidden">Experience</a></li>
```

## INSTRUCTIONS

1. Ouvrez ac-portfolio.html
2. Trouvez la fin de la section Hero (cherchez "</section>" après "hero-content")
3. Collez le code des sections Moi & BTS juste après
4. Modifiez la navigation comme indiqué
5. Sauvegardez

Le portfolio sera complet !
